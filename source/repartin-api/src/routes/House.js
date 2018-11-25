var express = require('express');
var router = express.Router();
var controller = require('../controller/HouseController.js');
let user = require('../controller/UserController.js');


router.post('/house', controller.create);
router.get('/house/:id', controller.getById);
router.get('/house', controller.getById);
router.put('/house/:id', controller.updateById);
router.get('/house/members/:house', user.getByHouse);
router.get('/house/admin/:id', controller.getAdmin);


module.exports = router;