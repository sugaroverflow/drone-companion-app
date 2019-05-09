/* Phase Controller */
const fs = require('fs');
const path = require('path');

function controller() {
  /**
   * get all phases based on module_id
   */
  function get(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/phaseData.json'));
    /* @todo is there a way to pass params from the router? */
    const { moduleId } = req.params;
    const jsonContent = JSON.parse(contents);
    const filtered = jsonContent.filter(item => item.module_id === moduleId);
    return res.json(filtered);
  }
  return { get };
}

module.exports = controller;
