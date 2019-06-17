/* Task Controller */
const fs = require('fs');
const path = require('path');

function controller() {
  /**
   * get all tasks by phaseOId and module id = 1
   */
  function get(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/moduleData.json'));
    const moduleOId = '1'; // because there is only one module
    const { phaseOId } = req.params;
    const jsonContent = JSON.parse(contents);
    if (phaseOId !== null && moduleOId !== null) {
      const filtered = jsonContent.find(item => `${item.orderNum}` === moduleOId).phases
        .find(item => `${item.orderNum}` === phaseOId).tasks;
      return res.json(filtered);
    }

    return res.json(jsonContent);
  }

  function getById(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/moduleData.json'));
    const moduleOId = '1'; // because there is only one module
    const {
      phaseOId, taskOId
    } = req.params;
    const jsonContent = JSON.parse(contents);
    if (phaseOId !== null && moduleOId !== null) {
      const filtered = jsonContent.find(item => `${item.orderNum}` === moduleOId).phases
        .find(item => `${item.orderNum}` === phaseOId).tasks
        .find(item => `${item.orderNum}` === taskOId);

      return res.json(filtered);
    }

    return res.json(jsonContent);
  }
  return { get, getById };
}

module.exports = controller;
