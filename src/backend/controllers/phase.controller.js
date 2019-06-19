/* Phase Controller */
const models = require('../models/db');

function controller() {
  function getById(req, res) {
    const { phaseOId } = req.params;
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
          },
          include: [
            {
              model: models.Task
            }
          ]
        }).then((phase) => {
          res.json(phase);
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
