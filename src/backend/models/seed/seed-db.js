const models = require('../db');
const MODULES = require('./moduleData.json');
const PHASES = require('./phaseData.json');
const TASKS = require('./taskData.json');
const STEPS = require('./stepData.json');
const GUIDANCES = require('./guidanceData.json');
const QUIZTYPES = require('./quizTypeData.json');
const QUIZZES = require('./quizData.json');
const QUESTIONS = require('./questionData.json');
const ALTERNATIVES = require('./alternativeData.json');

module.exports = {
  insert: () => {
    models.Module
      .bulkCreate(MODULES).then(() => {
        models.Phase.bulkCreate(PHASES).then(() => {
          models.Task.bulkCreate(TASKS).then(() => {
            models.Step.bulkCreate(STEPS).then(() => {
              models.Guidance.bulkCreate(GUIDANCES).then(() => {
                console.log('Success adding modules, phases, tasks, steps and guidances.');
              });
            });
            models.QuizType.bulkCreate(QUIZTYPES).then(() => {
              models.Quiz.bulkCreate(QUIZZES).then(() => {
                models.Question.bulkCreate(QUESTIONS).then(() => {
                  models.Alternative.bulkCreate(ALTERNATIVES).then(() => {
                    console.log('Success adding quizzes, questions and answers');
                  });
                });
              });
            });
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
