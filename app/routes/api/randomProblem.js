'use strict';
let express = require('express');
let router = express.Router();

let randomProblemController = require('../../controllers/randomProblemController');

/*----------------------------------------------------------------------
# API /randomProblem
----------------------------------------------------------------------*/
router.get('/', randomProblemController.read);


module.exports = router;
