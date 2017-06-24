'use strict';
let jwt = require('jsonwebtoken');
let User = require('../../models/user');

let signIn = function (req, res, next) {
  let signInView = req.app.locals.config.views.signIn;

  User.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
    if (err) throw err;

    if (user) {
      if (user.password === req.body.password) {
        let payload = {
          sub: user._id,
          usr: user.email,
        };

        let token = jwt.sign(payload, process.env.APP_KEY, {
          expiresIn: 10800
        });

        res.cookie('jwt', token, { httpOnly: true });

        res.redirect('/app');

      } else {
        let alert = ''
          .concat('The password doesn\'t match the user')
          .concat(' or the account doesn\'t exist.');

        res.render(signInView, { title: 'Sign In', alert });
      }

    } else {
      let alert = ''
        .concat('The password doesn\'t match the user')
        .concat(' or the account doesn\'t exist.');

      res.render(signInView, { title: 'Sign In', alert });
    }
  });
};


module.exports = signIn;
