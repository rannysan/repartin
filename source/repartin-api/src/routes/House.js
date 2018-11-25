var express = require('express');
var router = express.Router();
var controller = require('../controller/HouseController.js');


router.post('/house', controller.create);
router.get('/house/:id', controller.getById);
router.get('/house', controller.getById);
router.put('/house/:id', controller.updateById)

module.exports = router;