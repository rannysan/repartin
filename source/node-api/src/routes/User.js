var express = require('express');
var router = express.Router();
var controller = require('../Controller/UserController.js');

router.get('/');
router.post('/create', controller.create);

module.exports = router;