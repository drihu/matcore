'use strict';
let passport = require('passport');

let authenticate = [
  passport.authenticate('jwt', {
    failureRedirect: '/auth/signin',
    session: false
  }),

  function (req, res, next) {
    res.locals.user = req.user;
    next();
  }
];


module.exports = authenticate;
