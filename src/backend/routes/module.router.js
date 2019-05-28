/* Module router */

const express = require('express');

const router = express.Router();
const moduleController = require('../controllers/module.controller')();

router.get('/', (req, res) => {
  moduleController.get(req, res);
});
router.get('/:moduleId', (req, res) => {
  moduleController.getModuleById(req, res);
});

module.exports = router;
