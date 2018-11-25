var express = require('express');
var router = express.Router();
var controller = require('../controller/PaletteController.js');


router.post('/pallete', controller.create);
router.get('/pallete/:id', controller.getById);
router.get('/pallete', controller.getById);
router.put('/pallete/:id', controller.updateById)

module.exports = router;