'use strict';
let express = require('express');
let router = express.Router();

/*----------------------------------------------------------------------
# Authentication Routes
----------------------------------------------------------------------*/
router.get('/signin', (req, res, next) => {
  res.render('auth/signin', { title: 'Sign In' });
});

router.get('/signup', (req, res, next) => {
  res.render('auth/signup', { title: 'Sign Up' });
});


module.exports = router;
