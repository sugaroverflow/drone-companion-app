const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// return a list of all phases
router.get('/', (req, res) => {
  const contents = fs.readFileSync(path.resolve(__dirname, './data/phaseData.json'));
  const { moduleId } = req.params;
  const jsonContent = JSON.parse(contents);
  const filtered = jsonContent.filter(item => item.module_id === moduleId);
  res.json(filtered);
});

module.exports = router;
