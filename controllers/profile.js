// Require needed modules
let express = require('express')

// Declare an express router
let router = express.Router()

// Reference the models
let db = require('../models')

// GET /profile
router.get('/', (req, res) => {
  res.render('profile/index')
})

// Export the routes from this file
module.exports = router
