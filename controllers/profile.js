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

router.get('/pokemon/dex/:id', loggedIn, (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.query);
  console.log(req.user.dataValues.id);
  db.own.findAll({
    where: {
      userId: req.user.dataValues.id,
      dexId: req.params.id
    }
  })
  .then((allOwnsMatches) => {
    console.log(allOwnsMatches);
    res.render('profile/pokedisambig', {ownsData: allOwnsMatches});
  })
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

    if (resultOwn.dataValues.userId === req.user.id) { // make sure user only can look at their own pokes
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
          .then((ownMoves) => {
            let ownMovesArr = [];
            ownMoves.forEach((ownMoveObj) => {
              ownMovesArr.push(ownMoveObj.moveId);
            })
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

                db.move.findAll({
                  where: {
                    id: {[Op.in]: ownMovesArr}
                  }
                })
                .then((ownMovesDetails) => {
                  db.type.findAll()
                  .then((typeInfo) => {
                    let ownKnownAbilIndex = potAbilArr.indexOf(Number(resultOwn.abilityId));
                    console.log(potAbilArr);
                    // res.send({abilitiesData: dexAbilArr, dexData: resultOwn, ownMoves: ownMovesDetails, ownMovesArr: ownMovesArr, dexMoveData: dexMoveData, typeInfo: typeInfo, ownAbilIndex: ownKnownAbilIndex})
                    res.render('profile/pokeindshow', {abilitiesData: dexAbilArr, dexData: resultOwn, ownMoves: ownMovesDetails, ownMovesArr: ownMovesArr, dexMoveData: dexMoveData, typeInfo: typeInfo, ownAbilIndex: ownKnownAbilIndex});
                  })
                })
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

// add move to moveset
router.post('/pokemon/add-to-moveset', loggedIn, (req, res) => {
  db.moves_owns.findAll({ // find all moves known by poke
    where: {
      ownId: req.body.ownId
    }
  })
  .then((presentMoveRels) => {
    knownMoveIdArr = [];
    presentMoveRels.forEach((moveRel) => {
      knownMoveIdArr.push(moveRel.moveId);
    });
    db.move.findOne({
      where: {
        id: req.body.moveId
      }
    })
    .then((pressedMove) => {
      if (knownMoveIdArr.includes(Number(req.body.moveId))) {
        req.flash('error', `${pressedMove.name} already in moveset.`);
        res.redirect(`/profile/pokemon/${req.body.ownId}`);
      } else if (presentMoveRels.length > 3) {
        req.flash('error', `Moveset full; remove one before adding ${pressedMove.name}.`);
        res.redirect(`/profile/pokemon/${req.body.ownId}`);
      } else {
        db.moves_owns.findOrCreate({
          where: {
            ownId: req.body.ownId,
            moveId: req.body.moveId
          }
        })
        .then(() => { // send back to pokemon's prof page, location: scroll position of said move
          res.redirect(`/profile/pokemon/${req.body.ownId}#move-${req.body.moveId}`);
        })
      }
    })
  })
})

// change nickname/role desc for own model id: req.body.ownId
router.put('/pokemon/change-nickname-role', loggedIn, (req, res) => {
  db.own.update({
    nickname: req.body.nickname,
    profilename: req.body.profilename
  },{
    where: {
      id: req.body.ownId
    }
  })
  .then((updatedRecord) => {
    console.log(updatedRecord);
    res.redirect(`/profile/pokemon/${req.body.ownId}`)
  })
})

// change which ability is applied for own model id: req.body.ownId
router.post('/pokemon/change-ability', loggedIn, (req, res) => {
  db.own.update({
    abilityId: req.body.abilityId
  },{
    where: {id: req.body.ownId}
  })
  .then((changedRec) => {
    res.redirect(`/profile/pokemon/${req.body.ownId}`)
  })
})

// remove a move from own model id: req.body.ownId
router.delete('/pokemon/remove-from-moveset', loggedIn, (req, res) => {
  // res.send(req.body);
  db.moves_owns.destroy({
    where: {
      moveId: req.body.moveId,
      ownId: req.body.ownId
    }
  })
  .then(() => {
    res.redirect(`/profile/pokemon/${req.body.ownId}`);
  })
})

/* start of party-related routes */
router.post('/parties/add-pokemon', loggedIn, (req, res) => {
  db.parties.findAll({
    where: {
      userId: req.user.id
    }
  })
  .then((foundParties) => {
    res.send(foundParties);
  })
})

// Export the routes from this file
module.exports = router
