/* Task router */

const express = require('express');

const router = express.Router();
const taskController = require('../controllers/task.controller')();

// define the main route
router.get('/:phaseId', (req, res) => {
  taskController.get(req, res);
});

module.exports = router;
