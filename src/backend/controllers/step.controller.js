/* Task Controller */
const models = require('../models/db');

function controller() {
  const moduleOId = '1';
  function getById(req, res) {
    const {
      phaseOId, taskOId, stepOId
    } = req.params;
    models.Module.findOne({
      where: {
        orderNum: Number(moduleOId)
      }
    })
      .then((module) => {
        models.Phase.findOne({
          where: {
            orderNum: Number(phaseOId),
            moduleId: module.moduleId
          }
        }).then((phase) => {
          models.Task.findOne({
            where: {
              orderNum: Number(taskOId),
              phaseId: phase.phaseId
            }
          }).then((task) => {
            models.Step.findOne({
              where: {
                orderNum: Number(stepOId),
                taskId: task.taskId
              },
              include: [
                {
                  model: models.Guidance
                }
              ]
            }).then((step) => {
              res.json(step);
            });
          });
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(404).send(error);
      });
  }
  return { getById };
}

module.exports = controller;
