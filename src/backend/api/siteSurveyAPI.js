// This file is mocking a web API by hitting hard coded data.
import { categories } from './CategoryData';
import { phases } from './PhaseData';
import { tasks } from './TaskData';
import { subtasks } from './SubTaskData';

const _ = require('lodash/head');

// eslint-disable-next-line no-underscore-dangle
const _generateId = function (categorys) {
  return (
    `${category.firstName.toLowerCase()}-${category.lastName.toLowerCase()}`
  );
};

// eslint-disable-next-line no-underscore-dangle
const _clone = function (item) {
  return JSON.parse(JSON.stringify(item)); // return cloned copy so that the item is passed by value instead of by reference
};

const CategoryApi = {
  getAllCategories() {
    return _clone(categories.sort((a, b) => a.OrderNum - b.OrderNum));
  },

  getCategoryById(id) {
    const category = categories.find(item => item.category_id === id);
    return _clone(category);
  },

  saveCategory(category) {
    // pretend an ajax call to web api is made here
    console.log(
      'Pretend this just saved the category to the DB via AJAX call...'
    );

    if (category.id) {
      const existingCategoryIndex = indexOf(
        categories,
        find(categories, { id: category.id })
      );
      categories.splice(existingCategoryIndex, 1, category);
    } else {
      // Just simulating creation here.
      // The server would generate ids for new categories in a real app.
      // Cloning so copy returned is passed by value rather than by reference.
      category.id = _generateId(category);
      categories.push(category);
    }

    return _clone(category);
  },

  deleteCategory(id) {
    console.log(
      'Pretend this just deleted the category from the DB via an AJAX call...'
    );
    remove(categories, { id });
  }
};

const PhaseApi = {
  getAllPhases() {
    return _clone(phases);
  },

  getAllPhasesByCategoryID(categoryId) {
    const phase = phases
      .filter(item => item.category_id === categoryId)
      .sort((a, b) => a.OrderNum - b.OrderNum);
    return _clone(phase);
  },

  getCompletedSubtasksCount(phaseId) {
    const completedSubtasksCount = 0;
    let totalSubTasksCount = 0;
    const totalTasks = tasks.filter(item => item.phase_id === phaseId);
    for (var i = 0; i < totalTasks.length; i++) {
      totalSubTasksCount += subtasks.filter(
        s => s.task_id === totalTasks[i].task_id
      ).length;
    }

    return `${completedSubtasksCount }/${totalSubTasksCount}`;
  },

  getPhaseById(phaseId) {
    const phase = phases.find(item => item.phase_id === phaseId);
    return _clone(phase);
  },

  savePhase(phase) {
    // pretend an ajax call to web api is made here
    console.log('Pretend this just saved the phase to the DB via AJAX call...');

    if (phase.id) {
      const existingPhaseIndex = indexOf(
        phases,
        find(phases, { id: phase.id })
      );
      phases.splice(existingPhaseIndex, 1, phase);
    } else {
      // Just simulating creation here.
      // The server would generate ids for new phases in a real app.
      // Cloning so copy returned is passed by value rather than by reference.
      phase.id = _generateId(phase);
      phases.push(phase);
    }

    return _clone(phase);
  },

  deletePhase(id) {
    console.log(
      'Pretend this just deleted the phase from the DB via an AJAX call...'
    );
    remove(phases, { id });
  }
};

const TaskApi = {
  getAllTasks() {
    return _clone(tasks);
  },

  getTaskById(taskId) {
    const task = tasks.filter(item => item.task_id === taskId);
    return _clone(task);
  },

  getAllTasksByPhaseID(phaseId) {
    const task = tasks
      .filter(item => item.phase_id === phaseId)
      .sort((a, b) => a.OrderNum - b.OrderNum);
    return _clone(task);
  },

  getCompletedSubtasksCount(phaseId) {
    const completedSubtasksCount = 0;
    let totalSubTasksCount = 0;
    const totalTasks = tasks.filter(item => item.phase_id === phaseId);
    for (var i = 0; i < totalTasks.length; i++) {
      totalSubTasksCount += subtasks.filter(
        s => s.task_id === totalTasks[i].task_id
      ).length;
    }

    return `${completedSubtasksCount }/${totalSubTasksCount}`;
  },

  saveTask(task) {
    // pretend an ajax call to web api is made here
    console.log('Pretend this just saved the task to the DB via AJAX call...');

    if (task.id) {
      const existingTaskIndex = indexOf(tasks, find(tasks, { id: task.id }));
      tasks.splice(existingTaskIndex, 1, task);
    } else {
      // Just simulating creation here.
      // The server would generate ids for new tasks in a real app.
      // Cloning so copy returned is passed by value rather than by reference.
      task.id = _generateId(task);
      tasks.push(task);
    }

    return _clone(task);
  },

  deleteTask(id) {
    console.log(
      'Pretend this just deleted the task from the DB via an AJAX call...'
    );
    remove(tasks, { id });
  }
};

const SubtaskApi = {
  getAllSubtasks() {
    return _clone(subtasks);
  },

  getSubtaskById(id) {
    const subtask = subtasks.filter(item => item.id === id);
    return _clone(subtask);
  },

  saveSubtask(subtask) {
    // pretend an ajax call to web api is made here
    console.log(
      'Pretend this just saved the subtask to the DB via AJAX call...'
    );

    if (subtask.id) {
      const existingSubtaskIndex = indexOf(
        subtasks,
        find(subtasks, { id: subtask.id })
      );
      subtasks.splice(existingSubtaskIndex, 1, subtask);
    } else {
      // Just simulating creation here.
      // The server would generate ids for new subtasks in a real app.
      // Cloning so copy returned is passed by value rather than by reference.
      subtask.id = _generateId(subtask);
      subtasks.push(subtask);
    }

    return _clone(subtask);
  },

  deleteSubtask(id) {
    console.log(
      'Pretend this just deleted the subtask from the DB via an AJAX call...'
    );
    remove(subtasks, { id });
  }
};

const _CategoryApi = CategoryApi;
export { _CategoryApi as CategoryApi };
const _PhaseApi = PhaseApi;
export { _PhaseApi as PhaseApi };
const _TaskApi = TaskApi;
export { _TaskApi as TaskApi };
const _SubtaskApi = SubtaskApi;
export { _SubtaskApi as SubtaskApi };
