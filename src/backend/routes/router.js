/* Module router */
const mcache = require('memory-cache');

const express = require('express');

const router = express.Router();
const phaseController = require('../controllers/phase.controller')();
const taskController = require('../controllers/task.controller')();
const stepController = require('../controllers/step.controller')();

const cacheDuration = 1000;

const cache = duration => (req, res, next) => {
  const key = `__express__${req.originalUrl}` || req.url;
  const cachedBody = mcache.get(key);
  if (cachedBody) {
    res.send(cachedBody);
  } else {
    res.sendResponse = res.send;
    res.send = (body) => {
      mcache.put(key, body, duration * 1000);
      res.sendResponse(body);
    };
    next();
  }
};

router.get('/', cache(cacheDuration), (req, res) => {
  phaseController.getDefault(req, res);
});

router.get('/:phaseOId', cache(cacheDuration), (req, res) => {
  phaseController.getById(req, res);
});

router.get('/:phaseOId/tasks', cache(cacheDuration), (req, res) => {
  taskController.get(req, res);
});

router.get('/:phaseOId/tasks/:taskOId', cache(cacheDuration), (req, res) => {
  taskController.getById(req, res);
});

router.get('/:phaseOId/tasks/:taskOId/steps/:stepOId', cache(cacheDuration), (req, res) => {
  stepController.getById(req, res);
});

module.exports = router;
