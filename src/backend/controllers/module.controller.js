/* Module Controller */
const fs = require('fs');
const path = require('path');

function controller() {
  /**
   * get all modules
   */
  function get(req, res) {
    console.log('im in modules.js');
    const contents = fs.readFileSync(
      path.resolve(__dirname, '../data/moduleData.json')
    );
    const jsonContent = JSON.parse(contents);
    return res.json(jsonContent);
  }
  return { get };
}

module.exports = controller;
