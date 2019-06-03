/* Subtask Controller */
/* @todo update logic later */

function controller() {
  /**
   * get all subtasks based on task_id
   */
  function get(req, res) {}

  function getSubtasksByTaskId(taskId) {
    const subtask = subtasks
      .filter(item => item.task_id === taskId)
      .sort((a, b) => a.orderNum - b.orderNum);
    return clone(subtask);
  }

  function getCompletedSubtasksByTaskId(taskId) {
    const subtask = subtasks
      .filter(item => item.task_id === taskId) // Todo: add filter for completed subtasks.
      .sort((a, b) => a.orderNum - b.orderNum);
    return clone(subtask);
  }

  return { get };
}

module.exports = controller;
