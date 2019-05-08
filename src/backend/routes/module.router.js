/* Module router */

const express = require('express');

const router = express.Router();
const moduleController = require('../controllers/module.controller')();

// define the main route
router.get('/', (req, res) => {
  moduleController.get(req, res);
});

module.exports = router;
