'use strict';
let express = require('express');
let router = express.Router();

let subjectController = require('../../controllers/subjectController');

/*----------------------------------------------------------------------
# API /subjects
----------------------------------------------------------------------*/
router.get('/', subjectController.readAll);


module.exports = router;
