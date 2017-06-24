'use strict';
let signIn = require('./signInController');
let signOut = require('./signOutController');
let signUp = require('./signUpController');

let authController = {
  signIn,
  signUp,
  signOut,

  viewSignIn(req, res, next) {
    let signInView = req.app.locals.config.views.signIn;
    res.render(signInView, { title: 'Sign In' });
  },

  viewSignUp(req, res, next) {
    let signUpView = req.app.locals.config.views.signUp;
    res.render(signUpView, { title: 'Sign Up' });
  },
};


module.exports = authController;
