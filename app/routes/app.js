'use strict';
let express = require('express');
let router = express.Router();

let authenticate = require('../middlewares/authenticate');

/*----------------------------------------------------------------------
# Application Routes
----------------------------------------------------------------------*/
router.get('/', authenticate, (req, res, next) => {
  res.sendFile('/srv/www/matcore/resources/views/app.html');
});


module.exports = router;
