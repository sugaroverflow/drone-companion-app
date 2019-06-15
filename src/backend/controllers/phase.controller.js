/* Phase Controller */
const fs = require('fs');
const path = require('path');

function controller() {

  /**
   * Helper function
   * Gets all the phases from the database with module_id = 1
   */
  function getDefault(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/moduleData.json'));
    const jsonContent = JSON.parse(contents);
    const { moduleOId } = 1;
    if (moduleOId !== null) {
      const filtered = jsonContent.find(item => `${item.orderNum}` === moduleOId);
      return res.json(filtered);
    }
    return res.json(jsonContent);
  }

  function getById(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/moduleData.json'));
    const { moduleOId } = 1; // because there is only one module
    const jsonContent = JSON.parse(contents);
    if (moduleOId !== null) {
      const filtered = jsonContent.find(item => `${item.orderNum}` === moduleOId).phases;
      return res.json(filtered);
    }

    return res.json(jsonContent);
  }

  return { getDefault, getById };
}

module.exports = controller;
