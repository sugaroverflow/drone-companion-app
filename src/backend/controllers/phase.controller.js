/* Phase Controller */
const models = require('../models/db');

function controller() {
  function getById(req, res) {
    const { moduleOId, phaseOId } = req.params;

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
