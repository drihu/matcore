'use strict';
let express = require('express');
let router = express.Router();

let authController = require('../controllers/auth/authController');

/*----------------------------------------------------------------------
# Authentication Routes
----------------------------------------------------------------------*/
router.get('/signin', authController.viewSignIn);

router.post('/signin', authController.signIn);

router.get('/signup', authController.viewSignUp);

router.post('/signup', authController.signUp);

router.get('/signout', authController.signOut);


module.exports = router;
