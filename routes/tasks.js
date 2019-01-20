var express = require('express');
var router = express.Router();
var TaskController = require('../controllers/TaskController');
var TaskValidation = require('../validation/TaskValidation');


/* GET users listing. */
router.get('/',TaskController.getAllTask);
router.get('/:id', TaskValidation.getTaskById, TaskController.getTaskById);

module.exports = router;

