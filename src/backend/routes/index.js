const express = require('express');

const router = express.Router();

router.use('/api/modules', require('./modules'));
router.use('/api/phases/:moduleId', require('./phases'));
router.use('/api/tasks/:phaseId', require('./tasks'));

// @todo error handlings

module.exports = router;
