/* Module router */

const express = require('express');

const router = express.Router();
const moduleController = require('../controllers/module.controller')();
const phaseController = require('../controllers/phase.controller')();
const taskController = require('../controllers/task.controller')();
const stepController = require('../controllers/task.controller')();

router.get('/', (req, res) => {
  moduleController.get(req, res);
});
router.get('/:moduleOId', (req, res) => {
  moduleController.getById(req, res);
});

router.get('/:moduleOId/phases/:phaseOId', (req, res) => {
  phaseController.getById(req, res);
});

router.get('/:moduleOId/phases/:phaseOId/tasks/:taskOId', (req, res) => {
  taskController.getById(req, res);
});

router.get('/:moduleOId/phases/:phaseOId/tasks/:taskOId/steps/:stepOId', (req, res) => {
  stepController.getById(req, res);
});

module.exports = router;
