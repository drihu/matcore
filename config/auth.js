'use strict';

let views = {
  signIn: 'auth/signin',
  signUp: 'auth/signup',
};

let authConfig = function (app) {
  if (typeof app.locals.config === 'undefined') {
    app.locals.config = {};
  }

  app.locals.config.views = views;
};


module.exports = authConfig;
