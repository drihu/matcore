'use strict';
let User = require('../../models/user');

let signUp = [
  function (req, res, next) {
    let username = req.body.username;
    let signUpView = req.app.locals.config.views.signUp;

    if (username.length < 6) {
      let alert = 'Your username must be at least six characters.';
      res.render(signUpView, { title: 'Sign Up', alert });

    } else {
      next();
    }
  },

  function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    let passwordAgain = req.body.passwordAgain;
    let signUpView = req.app.locals.config.views.signUp;

    User.findOne({ username: req.body.username }, (err, user) => {
      if (user) {
        let alert = 'That user already exists.';
        res.render(signUpView, { title: 'Sign Up', alert });

      } else {
        if (password === passwordAgain) {
          let user = new User({
            username: username,
            password: password,
          });

          user.save();

          let alert = 'Your user has been created.';
          res.render(signUpView, { title: 'Sign Up', alert });

        } else {
          let alert = 'Passwords do not match.';
          res.render(signUpView, { title: 'Sign Up', alert });
        }
      }
    });
  }
];


module.exports = signUp;
