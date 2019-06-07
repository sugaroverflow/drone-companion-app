/* Task Controller */
const fs = require('fs');
const path = require('path');

function controller() {
  function getById(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/moduleData.json'));
    const {
      moduleOId, phaseOId, taskOId, stepOId
    } = req.params;
    const jsonContent = JSON.parse(contents);
    if (phaseOId !== null && moduleOId !== null) {
      const filtered = jsonContent.filter(item => `${item.orderNum}` === moduleOId)[0].phases
        .filter(item => `${item.orderNum}` === phaseOId)[0].tasks
        .filter(item => `${item.orderNum}` === taskOId)[0].steps
        .filter(item => `${item.orderNum}` === stepOId);
      return res.json(filtered);
    }

    return res.json(jsonContent);
  }
  return { getById };
}

module.exports = controller;
