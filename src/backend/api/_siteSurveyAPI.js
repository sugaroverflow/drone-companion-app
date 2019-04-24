/* @todo - the functionality here should move to the siteSurvey router
/routes/siteSurvey.js

//This file is mocking a web API by hitting hard coded data.
var categories = require("./CategoryData").categories;
var phases = require("./PhaseData").phases;
var tasks = require("./TaskData").tasks;
var subtasks = require("./SubTaskData").subtasks;
var _ = require("lodash");

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(category) {
  return (
    category.firstName.toLowerCase() + "-" + category.lastName.toLowerCase()
  );
};

var _clone = function(item) {
  return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var CategoryApi = {
  getAllCategories: function() {
    return _clone(categories.sort((a, b) => a.OrderNum - b.OrderNum));
  },

  getCategoryById: function(id) {
    var category = categories.find(item => item.category_id === id);
    return _clone(category);
  },

  saveCategory: function(category) {
    //pretend an ajax call to web api is made here
    console.log(
      "Pretend this just saved the category to the DB via AJAX call..."
    );

    if (category.id) {
      var existingCategoryIndex = _.indexOf(
        categories,
        _.find(categories, { id: category.id })
      );
      categories.splice(existingCategoryIndex, 1, category);
    } else {
      //Just simulating creation here.
      //The server would generate ids for new categories in a real app.
      //Cloning so copy returned is passed by value rather than by reference.
      category.id = _generateId(category);
      categories.push(category);
    }

    return _clone(category);
  },

  deleteCategory: function(id) {
    console.log(
      "Pretend this just deleted the category from the DB via an AJAX call..."
    );
    _.remove(categories, { id: id });
  }
};

var PhaseApi = {
  getAllPhases: function() {
    return _clone(phases);
  },

  getAllPhasesByCategoryID: function(categoryId) {
    var phase = phases
      .filter(item => item.category_id === categoryId)
      .sort((a, b) => a.OrderNum - b.OrderNum);
    return _clone(phase);
  },

  getCompletedSubtasksCount: function(phaseId) {
    var completedSubtasksCount = 0;
    var totalSubTasksCount = 0;
    var totalTasks = tasks.filter(item => item.phase_id === phaseId);
    for (var i = 0; i < totalTasks.length; i++) {
      totalSubTasksCount += subtasks.filter(
        s => s.task_id === totalTasks[i].task_id
      ).length;
    }

    return completedSubtasksCount + "/" + totalSubTasksCount;
  },

  getPhaseById: function(phaseId) {
    var phase = phases.find(item => item.phase_id === phaseId);
    return _clone(phase);
  },

  savePhase: function(phase) {
    //pretend an ajax call to web api is made here
    console.log("Pretend this just saved the phase to the DB via AJAX call...");

    if (phase.id) {
      var existingPhaseIndex = _.indexOf(
        phases,
        _.find(phases, { id: phase.id })
      );
      phases.splice(existingPhaseIndex, 1, phase);
    } else {
      //Just simulating creation here.
      //The server would generate ids for new phases in a real app.
      //Cloning so copy returned is passed by value rather than by reference.
      phase.id = _generateId(phase);
      phases.push(phase);
    }

    return _clone(phase);
  },

  deletePhase: function(id) {
    console.log(
      "Pretend this just deleted the phase from the DB via an AJAX call..."
    );
    _.remove(phases, { id: id });
  }
};

var TaskApi = {
  getAllTasks: function() {
    return _clone(tasks);
  },

  getTaskById: function(taskId) {
    var task = tasks.filter(item => item.task_id === taskId);
    return _clone(task);
  },

  getAllTasksByPhaseID: function(phaseId) {
    var task = tasks
      .filter(item => item.phase_id === phaseId)
      .sort((a, b) => a.OrderNum - b.OrderNum);
    return _clone(task);
  },

  getCompletedSubtasksCount: function(phaseId) {
    var completedSubtasksCount = 0;
    var totalSubTasksCount = 0;
    var totalTasks = tasks.filter(item => item.phase_id === phaseId);
    for (var i = 0; i < totalTasks.length; i++) {
      totalSubTasksCount += subtasks.filter(
        s => s.task_id === totalTasks[i].task_id
      ).length;
    }

    return completedSubtasksCount + "/" + totalSubTasksCount;
  },

  saveTask: function(task) {
    //pretend an ajax call to web api is made here
    console.log("Pretend this just saved the task to the DB via AJAX call...");

    if (task.id) {
      var existingTaskIndex = _.indexOf(tasks, _.find(tasks, { id: task.id }));
      tasks.splice(existingTaskIndex, 1, task);
    } else {
      //Just simulating creation here.
      //The server would generate ids for new tasks in a real app.
      //Cloning so copy returned is passed by value rather than by reference.
      task.id = _generateId(task);
      tasks.push(task);
    }

    return _clone(task);
  },

  deleteTask: function(id) {
    console.log(
      "Pretend this just deleted the task from the DB via an AJAX call..."
    );
    _.remove(tasks, { id: id });
  }
};

var SubtaskApi = {
  getAllSubtasks: function() {
    return _clone(subtasks);
  },

  getSubtaskById: function(id) {
    var subtask = subtasks.filter(item => item.id === id);
    return _clone(subtask);
  },

  saveSubtask: function(subtask) {
    //pretend an ajax call to web api is made here
    console.log(
      "Pretend this just saved the subtask to the DB via AJAX call..."
    );

    if (subtask.id) {
      var existingSubtaskIndex = _.indexOf(
        subtasks,
        _.find(subtasks, { id: subtask.id })
      );
      subtasks.splice(existingSubtaskIndex, 1, subtask);
    } else {
      //Just simulating creation here.
      //The server would generate ids for new subtasks in a real app.
      //Cloning so copy returned is passed by value rather than by reference.
      subtask.id = _generateId(subtask);
      subtasks.push(subtask);
    }

    return _clone(subtask);
  },

  deleteSubtask: function(id) {
    console.log(
      "Pretend this just deleted the subtask from the DB via an AJAX call..."
    );
    _.remove(subtasks, { id: id });
  }
};

exports.CategoryApi = CategoryApi;
exports.PhaseApi = PhaseApi;
exports.TaskApi = TaskApi;
exports.SubtaskApi = SubtaskApi;