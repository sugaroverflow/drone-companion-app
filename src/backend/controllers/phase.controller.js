/* Phase Controller */
const models = require('../models/db');

function controller() {
  const moduleOId = '1';
  /**
   * Helper function
   * Gets all the phases from the database with module_id = 1
   */
  function getDefault(req, res) {
    // because there is only one module
    models.Module.findOne({
      where: {
        orderNum: Number(moduleOId)
      },
      order: [
        [models.Phase, 'orderNum'],
      ],
      include: [
        {
          model: models.Phase,
          include: [
            {
              model: models.Task
            }
          ]
        }
      ]
    }).then((module) => {
      res.json(module);
    }).catch((error) => {
      console.log(error);
      res.status(404).send(error);
    });
  }
  function getById(req, res) {
    const { phaseOId } = req.params;

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
  return { getDefault, getById };
}

module.exports = controller;
