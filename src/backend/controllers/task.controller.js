/* Task Controller */
const models = require('../models/db');

function controller() {
  function getById(req, res) {
    const {
      phaseOId, taskOId
    } = req.params;
    const moduleOId = 1; // temporary fix @todo update controllers to remove modules.
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
            },
            include: [{
              model: models.Step
            }]
          }).then((task) => {
            res.json(task);
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
