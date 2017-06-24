'use strict';
let express = require('express');
let router = express.Router();

let authenticate = require('../middlewares/authenticate');

/*----------------------------------------------------------------------
# Application Routes
----------------------------------------------------------------------*/
router.get('/', authenticate, (req, res, next) => {
  res.render('app', { title: 'You\'re logged in.' });
});


module.exports = router;
