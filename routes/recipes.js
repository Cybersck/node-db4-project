var express = require('express');
var controller = require('../controllers/recipeController');
var router = express.Router();



router.get('/', controller.get);
router.get('/list/:id', controller.getList);
router.get('/inst/:id', controller.getInstructions);

module.exports = router;
