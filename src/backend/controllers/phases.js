/* Module Controller */
const fs = require('fs');
const path = require('path');

function phaseController(app) {
  /**
   * Get all modules.
   */
  app.get('/', (req, res) => {
    const contents = fs.readFileSync(path.resolve(__dirname, './data/phaseData.json'));
    const { moduleId } = req.params;
    const jsonContent = JSON.parse(contents);
    const filtered = jsonContent.filter(item => item.module_id === moduleId);
    res.json(filtered)es;
  });
}

module.exports = phaseController;
