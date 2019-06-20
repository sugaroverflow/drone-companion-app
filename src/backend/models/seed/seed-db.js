'use strict';

const models = require('../db');
const _MODULES = require('./module.json');
const _PHASES = require('./phase.json');
const _TASKS = require('./task.json');
const _STEPS = require('./step.json');
const _GUIDANCES = require('./guidance.json');

module.exports = {
  insert: () => {
    models.Module
      .bulkCreate(_MODULES).then(() => {
        models.Phase.bulkCreate(_PHASES).then(()=>{
          models.Task.bulkCreate(_TASKS).then(()=>{
            models.Step.bulkCreate(_STEPS).then(()=>{
              models.Guidance.bulkCreate(_GUIDANCES).then(() => {
                console.log('Success adding users and books');
              });
            });
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
