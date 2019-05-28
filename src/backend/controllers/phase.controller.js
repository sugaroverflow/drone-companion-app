/* Phase Controller */
const fs = require('fs');
const path = require('path');

function controller() {
  /**
   * get all phases based on module_id
   */
  function get(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/phaseData.json'));

    const jsonContent = JSON.parse(contents);

    const moduleId = req.query.module_id;
    if (moduleId !== null) {
      const filtered = jsonContent.filter(item => item.module_id === moduleId);
      return res.json(filtered);
    }
    return res.json(jsonContent);
  }

  function getPhasebyId(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/phaseData.json'));
    /* @todo is there a way to pass params from the router? */
    const { phaseId } = req.params;
    const jsonContent = JSON.parse(contents);
    if (phaseId !== null) {
      const filtered = jsonContent.filter(item => item.phase_id === phaseId);
      return res.json(filtered);
    }

    return res.json(jsonContent);
  }
  return { get, getPhasebyId };
}

module.exports = controller;
