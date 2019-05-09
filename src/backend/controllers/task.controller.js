/* Task Controller */
const fs = require('fs');
const path = require('path');

function controller() {
  /**
   * get all tasks based on phase_id
   */
  function get(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/taskData.json'));
    const { phaseId } = req.params;
    const jsonContent = JSON.parse(contents);
    const filtered = jsonContent.filter(item => item.phase_id === phaseId);
    return res.json(filtered);
  }
  return { get };
}

module.exports = controller;
