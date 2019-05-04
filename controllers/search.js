// Require needed modules
let express = require('express')
var request = require('request')

// Declare express router
let router = express.Router()

// Reference models
let db = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Include custom middleware to ensure users logged in
let adminLoggedIn = require('../middleware/adminLoggedIn')
let loggedIn = require('../middleware/loggedIn')

// Declare routes
router.get('/', (req, res) => {
  db.gen.findAll()
  .then((gensObj) => {
    db.type.findAll()
    .then((typesObj) => {
      res.render('search/index.ejs', {type:typesObj, gen: gensObj})
    })
  })
})

router.get('/pokemon', (req, res) => {
  if (typeof req.query.gen === 'string') {
    genArr = [];
    genArr.push(req.query.gen);
    req.query.gen = genArr;
  }
  console.log(req.query);
  // res.send(req.query.gen.length)
  db.dex.findAll({
    include: [{
      model: db.type,
      attributes: ['id', 'name']
    }],
    where: {
      genId: {[Op.in]: req.query.gen}
    },
    order: [
      ['id', 'ASC']
    ]
  })
  .then((results) => {
    // res.send(results)
    res.render('search/pokemon', { results: results })
  })
})

router.post('/add-pokemon', (req, res) => {
  if (req.user === undefined) {
    res.redirect('/auth/login')
  } else {
    console.log(req.user.dataValues);
    db.own.findOrCreate({
      where: {
        userId: req.user.dataValues.id,
        dexId: req.body.dex,
        nickname: req.body.nickname
      }
    })
  }
  // db.own.findOrCreate({
  //   where: {
  //     userId: req.user.id
  //     dex: req.body.dex,
  //     name: req.body.name,
  //   }
  // })
  // .then((pokemon, wasCreated) => {
  //   res.redirect('/profile/')
  // })
})

// Export routes from this file
module.exports = router
