// Include .env variables
require('dotenv').config();

let apiCallUpperBound = 151;

// Require necessary modules
let express = require('express');
let flash = require('connect-flash');
var request = require('request');
let layouts = require('express-ejs-layouts');
let session = require('express-session');
let db = require('./models');

// Include passport configuration
let passport = require('./config/passportConfig');

// Declare Express app
let app = express();

// Set view engine
app.set('view engine', 'ejs');

// Include (use) middleware
app.use('/', express.static('public'));
app.use(layouts);
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Custom middleware - write data to locals on EVERY page
app.use((req, res, next) => {
  res.locals.alerts = req.flash();
  res.locals.user = req.user;
  next();
});

// Include routes from controllers
app.use('/auth', require('./controllers/auth'));
app.use('/profile', require('./controllers/profile'));
app.use('/search', require('./controllers/search'));

// Make a home route: GET /
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/')

// Catch-all route - render the 404 page
app.get('*', (req, res) => {
  res.render('404');
})

// Listen from your port
app.listen(process.env.PORT || 3013, () => {
  console.log(`listening on ${process.env.PORT || 3013}`);
});
