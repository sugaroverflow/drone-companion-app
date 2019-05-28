/* Task router */

const express = require('express');

const router = express.Router();
const taskController = require('../controllers/task.controller')();

// define the main route
router.get('/:taskId', (req, res) => {
  taskController.getTaskbyId(req, res);
});

router.get('/', (req, res) => {
  taskController.get(req, res);
});

module.exports = router;
