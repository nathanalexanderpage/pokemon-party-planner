// Require needed modules
let express = require('express')

// Declare an express router
let router = express.Router()

// Reference the models
let db = require('../models')

// Declare routes
router.get('/login', (req, res) => {
  res.render('auth/login')
})

router.post('/login', (req, res) => {
  console.log(req.body)
  res.send('Reached the route POST to /auth/login')
})

router.get('/signup', (req, res) => {
  res.render('auth/signup')
})

router.post('/signup', (req, res) => {
  console.log(req.body)
  if(req.body.password !== req.body.password_verify) {
    req.flash('error', 'Passwords do not match')
    res.redirect('/auth/signup')
  }
  else {
    db.user.findOrCreate({
      where: { email: req.body.email },
      defaults: req.body
    })
    .spread((user, wasCreated) => {
      req.flash('success', 'You successfully did a thing')
      res.redirect('/')
    })
    .catch((err) => {
      // Print all error info to the terminal (not okay for user to see)
      console.log('Error in POST /auth/signup', err)

      // Generic Error for all cases
      req.flash('error', 'Something went wrong! :(')

      // Validation-specific errors (okay to show the user)
      if(err && err.errors) {
        err.errors.forEach((e) => {
          if(e.type == 'Validation error') {
            req.flash('error', 'Validation issue - ' + e.message)
          }
        })
      }

      res.redirect('/auth/signup')
    })

  }
})

// Export the router object so that the routes can used elsewhere
module.exports = router
