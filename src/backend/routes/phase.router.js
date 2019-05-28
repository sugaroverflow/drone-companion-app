/* Phase router */

const express = require('express');

const router = express.Router();
const phaseController = require('../controllers/phase.controller')();

// define the main route

router.get('/:phaseId', (req, res) => {
  phaseController.getPhasebyId(req, res);
});

router.get('/', (req, res) => {
  phaseController.get(req, res);
});

module.exports = router;
