var express = require('express');
var router = express.Router();
var controller = require('../controller/PaymentController.js');


router.post('/payment', controller.create);
router.get('/payment/:id', controller.getById);
router.get('/payment', controller.getById);
router.put('/payment/:id', controller.updateById)

module.exports = router;