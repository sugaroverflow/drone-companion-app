/* Task Controller */
const fs = require('fs');
const path = require('path');

function controller() {
  function getById(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/moduleData.json'));
    const moduleOId = '1'; // because there is only one module
    const {
      phaseOId, taskOId, stepOId
    } = req.params;
    const jsonContent = JSON.parse(contents);
    if (moduleOId !== null && phaseOId !== null && taskOId !== null && stepOId !== null) {
      const filtered = jsonContent.find(item => `${item.orderNum}` === moduleOId).phases
        .find(item => `${item.orderNum}` === phaseOId).tasks
        .find(item => `${item.orderNum}` === taskOId).steps
        .find(item => `${item.orderNum}` === stepOId);
      return res.json(filtered);
    }

    return res.json(jsonContent);
  }
  return { getById };
}

module.exports = controller;
