/* Module Controller */
const models = require('../models/db');

function controller() {
  /**
   * get all modules
   */
  function get(req, res) {
    models.Module.findAll()
      .then((modules) => {
        res.json(modules);
      })
      .catch((error) => {
        console.log(error);
        res.status(404).send(error);
      });
  }

  function getById(req, res) {
    const { moduleOId } = req.params;
    models.Module.findOne({
      where: {
        orderNum: Number(moduleOId)
      },
      include: [
        {
          model: models.Phase,
          include: [{
            model: models.Task,
          }]
        }
      ]
    })
      .then((module) => {
        res.json(module);
      })
      .catch((error) => {
        console.log(error);
        res.status(404).send(error);
      });
  }

  return { get, getById };
}

module.exports = controller;
