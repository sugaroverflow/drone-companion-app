/* Phase Controller */
const fs = require('fs');
const path = require('path');

function controller() {
  function getById(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/moduleData.json'));
    const {
      moduleOId, phaseOId
    } = req.params;
    const jsonContent = JSON.parse(contents);
    if (phaseOId !== null && moduleOId !== null) {
      const filtered = jsonContent.find(item => `${item.orderNum}` === moduleOId).phases
        .find(item => `${item.orderNum}` === phaseOId);
      return res.json(filtered);
    }

    return res.json(jsonContent);
  }
  return { getById };
}

module.exports = controller;
