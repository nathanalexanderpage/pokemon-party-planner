// Require needed modules
let express = require('express')
var request = require('request')

// Declare an express router
let router = express.Router()

// Reference the models
let db = require('../models')

// Include our custom middleware to ensure that users are logged in
let adminLoggedIn = require('../middleware/adminLoggedIn')
let loggedIn = require('../middleware/loggedIn')

// GET /profile
router.get('/', loggedIn, (req, res) => {
  db.poke.findAll()
  .then((results) => {
    res.render('profile/index', {results: results})
  })
})

// GET /profile/admin
router.get('/admin', adminLoggedIn, (req, res) => {
  res.render('profile/admin')
})

router.get('/:id', loggedIn, (req, res) => {
  db.users_pokes.findAll({
    where: { id: req.params.id }
  })
  .then((results) => {
    console.log(results);
    res.render('profile/pokeshow', {results})
  })
  .catch((err) => {
    console.log('err: ', err);
  })
})

// Export the routes from this file
module.exports = router
