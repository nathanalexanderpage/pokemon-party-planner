// Require needed modules
let express = require('express')

// Declare express router
let router = express.Router()

// Reference models
let db = require('../models')

// Include custom middleware to ensure users logged in
let adminLoggedIn = require('../middleware/adminLoggedIn')
let loggedIn = require('../middleware/loggedIn')

// Declare routes


// Export routes from this file
module.exports = router
