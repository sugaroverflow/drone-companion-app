const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// return a list of all modules
router.get('/', (req, res) => {
  const contents = fs.readFileSync(path.resolve(__dirname, './data/moduleData.json'));
  const jsonContent = JSON.parse(contents);
  res.json(jsonContent);
});

module.exports = router;
