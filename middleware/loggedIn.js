module.exports = (req, res, next) => {
  if(req.user) {
    // Someone is logged in. This is expected.
    // So, we allow them to proceed
    next()
  } else {
    req.session.redirectTo = req.originalUrl;
    console.log(req.session.redirectTo);
    req.flash('error', 'You must be logged in to view this page!')
    res.redirect('/auth/login')
  }
}
