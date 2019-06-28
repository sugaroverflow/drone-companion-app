/* Task Controller */
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
  function getById(req, res) {
    const dbLang = getDBLang(req);
    const {
      phaseOId, taskOId
    } = req.params;
    models.Module.findOne({
      attributes: ['moduleId', [`module_title_${dbLang}txt`, 'title'], [`module_description_${dbLang}txt`, 'description'], 'orderNum'],
      where: {
        orderNum: Number(moduleOId)
      }
    })
      .then((module) => {
        models.Phase.findOne({
          attributes: ['phaseId', [`phase_title_${dbLang}txt`, 'title'], [`phase_description_${dbLang}txt`, 'description'],
            'estimate', 'orderNum'],
          where: {
            orderNum: Number(phaseOId),
            moduleId: module.moduleId
          }
        }).then((phase) => {
          models.Task.findOne({
            attributes: [[`task_title_${dbLang}txt`, 'title'],
              'estimate', 'orderNum'],
            where: {
              orderNum: Number(taskOId),
              phaseId: phase.phaseId
            },
            order: [
              [models.Step, 'orderNum'],
              [models.Quiz, 'quizTypeId'],
              [models.Quiz, 'orderNum'],
            ],
            include: [{
              attributes: [[`step_title_${dbLang}txt`, 'title'], [`step_description_${dbLang}txt`, 'description'],
                [`step_image_url_${dbLang}txt`, 'imageUrl'], 'orderNum'],
              model: models.Step
            },
            {
              model: models.Quiz
            }
            ]
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
