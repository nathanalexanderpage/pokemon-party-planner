// Require needed modules
let express = require('express')
var request = require('request')

// Declare express router
let router = express.Router()

// Reference models
let db = require('../models')

// Include custom middleware to ensure users logged in
let adminLoggedIn = require('../middleware/adminLoggedIn')
let loggedIn = require('../middleware/loggedIn')

// Declare routes
router.get('/', (req, res) => {
  db.gen.findAll()
  .then((gen) => {
    // res.send(results)
    res.render('search/index.ejs', {gen:gen})
  })
})

router.get('/pokemon/', (req, res) => {
  db.dex.findAll({
    where: {
      genId: req.params.gen
    },
    include: [db.gens]
  })
  .then((results) => {
    res.send(results)
    // res.render('search/pokemon', { results: results })
  })
})

router.post('/add-pokemon', (req, res) => {
  db.own.findOrCreate({
    where: {
      dex: req.body.dex,
      name: req.body.name,
    }
  })
  .then((pokemon, wasCreated) => {
    res.redirect('/profile/')
  })
})

// Export routes from this file
module.exports = router
