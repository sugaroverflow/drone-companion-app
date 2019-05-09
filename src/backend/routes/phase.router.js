/* Phase router */

const express = require('express');

const router = express.Router();
const phaseController = require('../controllers/phase.controller')();

// define the main route
router.get('/:moduleId', (req, res) => {
  phaseController.get(req, res);
});

module.exports = router;
