// This file is mocking a web API by hitting hard coded data.
const _ = require('lodash');
const categories = require('../api/categoryData.json').categoryData;
const phases = require('../api/phaseData.json').phaseData;
const tasks = require('../api/taskData.json').taskData;
const subtasks = require('../api/subtaskData.json').subtaskData;

// This would be performed on the server in a real app. Just stubbing in.
const generateId = category => (
  `${category.firstName.toLowerCase()}-${category.lastName.toLowerCase()}`
);

// return cloned copy so that the item is passed by value instead of by reference
const clone = item => (
  JSON.parse(JSON.stringify(item))
);

const SiteSurveyApi = {
  getAllCategories() {
    return clone(categories.sort((a, b) => a.OrderNum - b.OrderNum));
  },

  getCategoryById(id) {
    const category = categories.find(item => item.category_id === id);
    return clone(category);
  },

  saveCategory(category) {
    // pretend an ajax call to web api is made here
    console.log(
      'Pretend this just saved the category to the DB via AJAX call...'
    );

    if (category.id) {
      const existingCategoryIndex = _.indexOf(
        categories,
        _.find(categories, { id: category.id })
      );
      categories.splice(existingCategoryIndex, 1, category);
      return clone(category);
    }
    // Just simulating creation here.
    // The server would generate ids for new categories in a real app.
    // Cloning so copy returned is passed by value rather than by reference.
    const newCategory = clone(category);
    newCategory.id = generateId(newCategory);
    categories.push(newCategory);
    return clone(newCategory);
  },

  deleteCategory(id) {
    console.log(
      'Pretend this just deleted the category from the DB via an AJAX call...'
    );
    _.remove(categories, { id });
  },
  // Phase Related API
  getAllPhases() {
    return clone(phases);
  },

  getAllPhasesByCategoryID(categoryId) {
    const phase = phases
      .filter(item => item.category_id === categoryId)
      .sort((a, b) => a.OrderNum - b.OrderNum);
    return clone(phase);
  },

  getPhaseById(phaseId) {
    const phase = phases.find(item => item.phase_id === phaseId);
    return clone(phase);
  },

  getCompletedSubtasksCount(phaseId) {
    return 0;
  },

  savePhase(phase) {
    // pretend an ajax call to web api is made here
    console.log('Pretend this just saved the phase to the DB via AJAX call...');

    if (phase.id) {
      const existingPhaseIndex = _.indexOf(
        phases,
        _.find(phases, { id: phase.id })
      );
      phases.splice(existingPhaseIndex, 1, phase);
      return clone(phase);
    }
    // Just simulating creation here.
    // The server would generate ids for new phases in a real app.
    // Cloning so copy returned is passed by value rather than by reference.
    const newPhase = clone(phase);
    newPhase.id = generateId(newPhase);
    phases.push(newPhase);
    return newPhase;
  },

  deletePhase(id) {
    console.log(
      'Pretend this just deleted the phase from the DB via an AJAX call...'
    );
    _.remove(phases, { id });
  },
  // Task Related API
  getAllTasks() {
    return clone(tasks);
  },

  getTaskById(taskId) {
    const task = tasks.find(item => item.task_id === taskId);
    return clone(task);
  },

  getAllTasksByPhaseID(phaseId) {
    const task = tasks
      .filter(item => item.phase_id === phaseId)
      .sort((a, b) => a.OrderNum - b.OrderNum);
    return clone(task);
  },

  saveTask(task) {
    // pretend an ajax call to web api is made here
    console.log('Pretend this just saved the task to the DB via AJAX call...');

    if (task.id) {
      const existingTaskIndex = _.indexOf(
        tasks,
        _.find(tasks, { id: task.id })
      );
      tasks.splice(existingTaskIndex, 1, task);
      return clone(task);
    }
    // Just simulating creation here.
    // The server would generate ids for new tasks in a real app.
    // Cloning so copy returned is passed by value rather than by reference.
    const newTask = clone(task);
    newTask.id = generateId(newTask);
    tasks.push(newTask);
    return clone(newTask);
  },

  deleteTask(id) {
    console.log(
      'Pretend this just deleted the task from the DB via an AJAX call...'
    );
    _.remove(tasks, { id });
  },
  // Sub Related API
  getAllSubtasks() {
    return clone(subtasks);
  },

  getSubtaskById(subtaskId) {
    const subtask = subtasks.find(item => item.id === subtaskId);
    return clone(subtask);
  },

  getSubtasksByTaskId(taskId) {
    const subtask = subtasks
      .filter(item => item.task_id === taskId)
      .sort((a, b) => a.OrderNum - b.OrderNum);
    return clone(subtask);
  },

  getCompletedSubtasksByTaskId(taskId) {
    const subtask = subtasks
      .filter(item => item.task_id === taskId) // Todo: add filter for completed subtasks.
      .sort((a, b) => a.OrderNum - b.OrderNum);
    return clone(subtask);
  },

  saveSubtask(subtask) {
    // pretend an ajax call to web api is made here
    console.log(
      'Pretend this just saved the subtask to the DB via AJAX call...'
    );

    if (subtask.id) {
      const existingSubtaskIndex = _.indexOf(
        subtasks,
        _.find(subtasks, { id: subtask.id })
      );
      subtasks.splice(existingSubtaskIndex, 1, subtask);
      return clone(subtask);
    }
    // Just simulating creation here.
    // The server would generate ids for new subtasks in a real app.
    // Cloning so copy returned is passed by value rather than by reference.
    const newSubtask = clone(subtask);
    newSubtask.id = generateId(newSubtask);
    subtasks.push(newSubtask);
    return clone(newSubtask);
  },

  deleteSubtask(id) {
    console.log(
      'Pretend this just deleted the subtask from the DB via an AJAX call...'
    );
    _.remove(subtasks, { id });
  }
};

exports.SiteSurveyApi = SiteSurveyApi;
