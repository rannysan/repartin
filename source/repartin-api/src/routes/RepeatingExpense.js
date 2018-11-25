var express = require('express');
var router = express.Router();
var controller = require('../controller/RepeatingExpenseController.js');


router.post('/rExpense', controller.create);
router.get('/rExpense/:id', controller.getById);
router.get('/rExpense', controller.getById);
router.put('/rExpense/:id', controller.updateById)

module.exports = router;