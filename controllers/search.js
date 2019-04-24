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
  res.render('search/index.ejs')
})

router.get('/pokemon/', (req, res) => {
  let pokeapiUrl = `${process.env.API_BASE_URL}pokemon/?offset=${req.query.offset}&limit=${req.query.limit}`
  request(pokeapiUrl, (err, apiResp, body) => {
    // res.send(JSON.parse(body).results)
    let pokeData = JSON.parse(body).results
    res.render('search/pokemon', { pokeData: pokeData })
  })
})

router.post('/add-pokemon', (req, res) => {
  db.poke.findOrCreate({
    where: {
      dex: req.body.dex,
      name: req.body.name,
      urlImage: req.body.urlImage,
      urlSprite: req.body.urlSprite
    }
  })
  .then((pokemon, wasCreated) => {
    res.redirect('/profile/')
  })
})

// Export routes from this file
module.exports = router
