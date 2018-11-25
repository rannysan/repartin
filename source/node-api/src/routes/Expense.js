var express = require('express');
var router = express.Router();
var controller = require('../controller/ExpenseController.js');


router.post('/expense', controller.create);
router.get('/expense/:id', controller.getById);
router.get('/expense', controller.getById);
router.put('/expense/:id', controller.updateById)

module.exports = router;