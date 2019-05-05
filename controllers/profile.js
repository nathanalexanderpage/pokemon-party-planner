// Require needed modules
let express = require('express')
var request = require('request')

// Declare an express router
let router = express.Router()

// Reference the models
let db = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Include our custom middleware to ensure that users are logged in
let adminLoggedIn = require('../middleware/adminLoggedIn')
let loggedIn = require('../middleware/loggedIn')

// GET /profile
router.get('/', loggedIn, (req, res) => {
  db.own.findAll({
    where: {
      userId: req.user.id
    },
    order: [
      ['id', 'DESC']
    ],
    limit: 10
  })
  .then((results) => {
    console.log(results);
    // res.send(results)
    res.render('profile/index', {results: results})
  })
})

// GET /profile/admin
router.get('/admin', adminLoggedIn, (req, res) => {
  res.render('profile/admin')
})

// GET /profile/newpoke
router.get('/poke/new', loggedIn, (req, res) => {
  console.log(req);
  let passData = req.query
  let pokeapiUrl = `${process.env.API_BASE_URL}pokemon/${passData.id}`
  request(pokeapiUrl, (err, apiResp, body) => {
    let pokeData = JSON.parse(body)
    console.log(pokeData)
    res.render('profile/pokenew', { pokeData })
  })
})

router.post('/poke/new', loggedIn, (req, res) => {
  console.log(req.body);
  let moveArr = [];
  for (var i = 0; i < Object.keys(req.body).length; i++) {
    if (Object.keys(req.body)[i].includes('move')) {
      let currentKey = Object.keys(req.body)[i];
      moveArr.push(req.body[currentKey]);
    }
  }

  console.log(`
    userId: ${req.user.dataValues.id},
    pokeDex: ${req.body.pokeDex},
    profile_name: ${req.body.profile_name},
    name: ${req.body.name},
    ability: ${req.body.ability},
    move1: ${moveArr[0]},
    move2: ${moveArr[1]},
    move3: ${moveArr[2]},
    move4: ${moveArr[3]}`);
  // res.send('req received to console')
  // db.users_pokes.create({
  //   where: {
  //     userId: req.user.dataValues.id,
  //     pokeDex: ,
  //     name: name,
  //     profile_name: profile_name,
  //
  //   }
  // })
})

// GET /profile/pokemon/:id
router.get('/pokemon/:id', loggedIn, (req, res) => {
  // console.log(req.params);
  db.own.findOne({
    where: {
      id: req.params.id
    },
    include: [db.dex]
  })
  .then((resultOwn) => {
    // console.log(req.params.dex);
    console.log(resultOwn);

    if (resultOwn.dataValues.userId === req.user.id) {
      db.dexes_moves.findAll({
        where: {
          dexId: resultOwn.dataValues.dexId
        }
      })
      .then((resultDexMoves) => { // keys: dexId, moveId
        dexMoveArr = [];
        resultDexMoves.forEach((dexMove) => {
          dexMoveArr.push(dexMove.moveId);
        })
        db.move.findAll({
          where: {
            id: {[Op.in]: dexMoveArr}
          }
        })
        .then((dexMoveData) => {
          db.moves_owns.findAll({
            where: {
              ownId: req.params.id
            }
          })
          .then((ownPokeKnows) => {
            db.abilities_dexes.findAll({
              where: {
                dexId: resultOwn.dataValues.dexId
              }
            })
            .then((dexPotentialAbilities) => {
              potAbilArr = [];
              dexPotentialAbilities.forEach((potAbil) => {
                potAbilArr.push(potAbil.abilityId);
              })
              db.ability.findAll({
                where: {
                  id: {[Op.in]: potAbilArr}
                }
              })
              .then((dexAbilArr) => {
                // res.send({abilitiesData: dexAbilArr, dexData: resultOwn, ownPokeKnows: ownPokeKnows, dexMoveData: dexMoveData})
                res.render('profile/pokeindshow', {abilitiesData: dexAbilArr, dexData: resultOwn, ownPokeKnows: ownPokeKnows, dexMoveData: dexMoveData});
              })
            })
          })
        })
      })
    } else {
      res.render('404');
    }
  })
  .catch((err) => {
    console.log('err: ', err);
  })
})

// Export the routes from this file
module.exports = router
