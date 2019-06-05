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

  function getById(req, res) {
    const contents = fs.readFileSync(path.resolve(__dirname, '../data/moduleData.json'));
    const { moduleOId } = req.params;
    const jsonContent = JSON.parse(contents);
    if (moduleOId !== null) {
      const filtered = jsonContent.find(item => `${item.orderNum}` === moduleOId);
      return res.json(filtered);
    }

    return res.json(jsonContent);
  }


  return { get, getById };
}


module.exports = controller;
