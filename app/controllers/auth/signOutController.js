'use strict';

let signOut = function (req, res, next) {
  res.clearCookie('jwt');
  res.redirect('/');
};


module.exports = signOut;
