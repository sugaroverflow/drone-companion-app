/* Task Controller */
const models = require('../models/db');

function formatQuiz(quizObj) {
  let correctAnswer = 0;
  const quiz = quizObj;
  for (let j = 0; j < quiz.Questions.length; j += 1) {
    for (let k = 0; k < quiz.Questions[j].Answers.length; k += 1) {
      if (quiz.Questions[j].Answers[k].correctAnswerIndicator === true) {
        correctAnswer = k + 1;
      }
    }
    quiz.Questions[j].questionType = (quiz.Questions[j].questionTypeId === 1 ? 'photo' : 'text');
    quiz.Questions[j].answers = quiz.Questions[j].Answers.map(x => x.answer);
    quiz.Questions[j].correctAnswer = correctAnswer;
    delete quiz.Questions[j].questionTypeId;
    delete quiz.Questions[j].Answers;
  }
  quiz.questions = quiz.Questions;
  delete quiz.Questions;
  delete quiz.description;
  return quiz;
}

function controller() {
  function getDBLang(req) {
    const { lang } = req.query;
    if (lang) {
      if (lang.toLowerCase() === 'fr') { return 'f'; }
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
            'orderNum'],
          where: {
            orderNum: Number(phaseOId),
            moduleId: module.moduleId
          }
        }).then((phase) => {
          models.Task.findOne({
            attributes: [[`task_title_${dbLang}txt`, 'title'],
              'orderNum'],
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
              model: models.Step,
              attributes: [[`step_title_${dbLang}txt`, 'title'], [`step_description_${dbLang}txt`, 'description'],
                [`step_image_url_${dbLang}txt`, 'imageUrl'], 'orderNum'],
            },
            {
              model: models.Quiz,
              attributes: [[`quiz_title_${dbLang}txt`, 'quizTitle'], 'quizTypeId', [`quiz_description_${dbLang}txt`, 'quizSynopsis'],
                'orderNum'],
              include: [{
                model: models.Question,
                attributes: [[`question_${dbLang}txt`, 'question'], [`explanation_${dbLang}txt`, 'messageForCorrectAnswer'], 'questionTypeId', [`explanation_${dbLang}txt`, 'messageForInorrectAnswer']],
                include: [{
                  model: models.Alternative,
                  as: 'Answers',
                  attributes: [[`alternative_${dbLang}txt`, 'answer'], 'correctAnswerIndicator'],
                }],
              }],
            }
            ]
          }).then((taskObj) => {
            const taskJSON = taskObj.toJSON();
            taskJSON.preQuiz = formatQuiz(taskJSON.Quizzes.find(x => x.quizTypeId === 1));
            taskJSON.postQuiz = formatQuiz(taskJSON.Quizzes.find(x => x.quizTypeId === 2));
            delete taskJSON.Quizzes;
            res.json(taskJSON);
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
