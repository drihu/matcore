'use strict';
let User = require('../../models/user');

let signUp = [
  function (req, res, next) {
    let email = req.body.email;
    let signUpView = req.app.locals.config.views.signUp;

    if (email.length < 6) {
      let alert = 'The email must be at least six characters.';
      res.render(signUpView, { title: 'Sign Up', alert });

    } else if (/^[a-z]([\.\-_]?[a-z0-9])*@[a-z0-9]([a-z0-9-]?[a-z0-9])*\.[a-z]{2,}$/i.test(email)) {
      next();

    } else {
      let alert = 'The email must be a valid email address.';
      res.render(signUpView, { title: 'Sign Up', alert });
    }
  },

  function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    let passwordAgain = req.body.passwordAgain;
    let signUpView = req.app.locals.config.views.signUp;

    User.findOne({ email: email }, (err, user) => {
      if (err) throw err;

      if (user) {
        let alert = 'That user already exists.';
        res.render(signUpView, { title: 'Sign Up', alert });

      } else {
        if (password === passwordAgain) {
          if (password.length >= 6) {
            let user = new User({
              email: email,
              password: password,
            });

            user.save((err) => {
              if (err) throw err;
            });

            let alert = 'Your user has been created.';
            res.render(signUpView, { title: 'Sign Up', alert });

          } else {
            let alert = 'The password must be at least six characters.';
            res.render(signUpView, { title: 'Sign Up', alert });
          }

        } else {
          let alert = 'Passwords do not match.';
          res.render(signUpView, { title: 'Sign Up', alert });
        }
      }
    });
  }
];


module.exports = signUp;
