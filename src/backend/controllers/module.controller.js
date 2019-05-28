/* Module Controller */
const fs = require('fs');
const path = require('path');

function controller() {
  /**
   * get all modules
   */
  function get(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/moduleData.json'));
    /* @todo is there a way to pass params from the router? */
    const jsonContent = JSON.parse(contents);

    return res.json(jsonContent);
  }

  function getModuleById(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/moduleData.json'));
    /* @todo is there a way to pass params from the router? */
    const { moduleId } = req.params;
    const jsonContent = JSON.parse(contents);
    if (moduleId !== null) {
      const filtered = jsonContent.filter(item => item.module_id === moduleId);
      return res.json(filtered);
    }

    return res.json(jsonContent);
  }


  return { get, getModuleById };
}


module.exports = controller;
