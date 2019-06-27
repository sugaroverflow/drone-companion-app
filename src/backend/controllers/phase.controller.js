/* Phase Controller */
const models = require('../models/db');

function controller() {
  function getDBLang(req) {
    const { lang } = req.query;
    if (lang) {
      if (lang.toLowerCase() === 'fra') { return 'f'; }
    }
    return 'e';
  }
  const moduleOId = '1';
  /**
   * Helper function
   * Gets all the phases from the database with module_id = 1
   */
  function getDefault(req, res) {
    // because there is only one module
    const dbLang = getDBLang(req);
    models.Module.findOne({
      attributes: [[`module_title_${dbLang}txt`, 'title'], [`module_description_${dbLang}txt`, 'description'], 'orderNum'],
      where: {
        orderNum: Number(moduleOId)
      },
      order: [
        [models.Phase, 'orderNum'],
      ],
      include: [
        {
          model: models.Phase,
          attributes: [[`phase_title_${dbLang}txt`, 'title'], [`phase_description_${dbLang}txt`, 'description'],
            'estimate', 'orderNum'],
          include: [
            {
              model: models.Task,
              attributes: [[`task_title_${dbLang}txt`, 'title'],
                'estimate', 'orderNum'],

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
    const dbLang = getDBLang(req);
    models.Module.findOne({
      attributes: ['moduleId', [`module_title_${dbLang}txt`, 'title'], [`module_description_${dbLang}txt`, 'description'], 'orderNum'],
      where: {
        orderNum: Number(moduleOId)
      }
    })
      .then((module) => {
        models.Phase.findOne({
          attributes: [[`phase_title_${dbLang}txt`, 'title'], [`phase_description_${dbLang}txt`, 'description'],
            'estimate', 'orderNum'],
          where: {
            orderNum: Number(phaseOId),
            moduleId: module.moduleId
          },
          include: [
            {
              model: models.Task,
              attributes: [[`task_title_${dbLang}txt`, 'title'],
                'estimate', 'orderNum'],

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
