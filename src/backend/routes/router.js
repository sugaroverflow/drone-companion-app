/* Module router */

const express = require('express');

const router = express.Router();
const phaseController = require('../controllers/phase.controller')();
const taskController = require('../controllers/task.controller')();
const stepController = require('../controllers/step.controller')();

router.get('/', (req, res) => {
  phaseController.getDefault(req, res);
});

router.get('/phases/:phaseOId', (req, res) => {
  phaseController.getById(req, res);
});

router.get('/phases/:phaseOId/tasks/:taskOId', (req, res) => {
  taskController.getById(req, res);
});

router.get('/phases/:phaseOId/tasks/:taskOId/steps/:stepOId', (req, res) => {
  stepController.getById(req, res);
});

module.exports = router;
