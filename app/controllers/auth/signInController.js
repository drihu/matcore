'use strict';
let jwt = require('jsonwebtoken');

let User = require('../../models/user');

let signIn = function (req, res, next) {
  let signInView = req.app.locals.config.views.signIn;

  User.findOne({ username: req.body.username }, (err, user) => {
    if (user) {
      if (user.password === req.body.password) {
        let payload = {
          sub: user._id,
          usr: user.username,
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

        res.render(signInView, { title: 'Sign In', alert: alert });
      }

    } else {
      let alert = ''
        .concat('The password doesn\'t match the user')
        .concat(' or the account doesn\'t exist.');

      res.render(signInView, { title: 'Sign In', alert: alert });
    }
  });
};


module.exports = signIn;
