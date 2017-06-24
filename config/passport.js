'use strict';
let passport = require('passport');
let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;

let utilHttp = require('../app/modules/util-http');

let User = require('../app/models/user');

/**
 * JSON Web Token Strategy
 */
let jwtStrategy = new JwtStrategy({
  jwtFromRequest: utilHttp.getCookie('jwt'),
  secretOrKey: process.env.APP_KEY

}, (jwt_payload, done) => {
  User.findOne({ _id: jwt_payload.sub }, (err, user) => {
    if (err) {
      return done(err, false);
    }

    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
      // or you could create a new account
    }
  });
});

/**
 * Initialize Passport
 */
let passportConfig = function (app) {
  app.use(passport.initialize());

  // Use JWT Strategy
  passport.use(jwtStrategy);
};


module.exports = passportConfig;
