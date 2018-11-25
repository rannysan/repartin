var express = require('express');
var router = express.Router();
var controller = require('../controller/UserController.js');


router.post('/user', controller.create);
router.get('/user/:id', controller.getById);
router.get('/user', controller.getById);
router.put('/user/:id', controller.updateById)

module.exports = router;