'use strict';
let express = require('express');
let router = express.Router();

let userController = require('../../controllers/userController');
let contactController = require('../../controllers/contactController');

/*----------------------------------------------------------------------
# API /users
----------------------------------------------------------------------*/
router.get('/', userController.readAll);
router.get('/:userId', userController.read);

router.get('/:userId/contacts', contactController.readAll);

module.exports = router;
