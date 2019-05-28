/* Task Controller */
const fs = require('fs');
const path = require('path');

function controller() {
  function get(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/taskData.json'));
    const phaseId = req.query.phase_id;
    const jsonContent = JSON.parse(contents);
    const filtered = jsonContent.filter(item => item.phase_id === phaseId);
    return res.json(filtered);
  }

  function getTaskbyId(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/taskData.json'));
    const { taskId } = req.params;
    const jsonContent = JSON.parse(contents);
    const filtered = jsonContent.filter(item => item.task_id === taskId);
    return res.json(filtered);
  }
  return { get, getTaskbyId };
}

module.exports = controller;
