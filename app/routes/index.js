'use strict';
let express = require('express');
let router = express.Router();

/*----------------------------------------------------------------------
# Web Routes
----------------------------------------------------------------------*/
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});


module.exports = router;
