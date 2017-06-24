'use strict';
let express = require('express');
let router = express.Router();

/*----------------------------------------------------------------------
# Web Routes
----------------------------------------------------------------------*/
router.get('/', (req, res, next) => {
  res.sendFile('/srv/www/matcore/resources/views/index.html');
});


module.exports = router;
