const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
let data = [];

function loadData() {
  const fileContents = fs.readFileSync(path.join(__dirname, '../api', 'checklistItemData.json'), 'utf8');
  return JSON.parse(fileContents);
}

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  data = loadData();
  next();
});

// define homepage route
router.get('/', (req, res) => {
  console.log(data.checkListItems);
  data.checkListItems.forEach((element) => {
    console.log(element.type);
    res.send(element.type);
  });

  // res.send('NOT IMPLEMENTED: Category List');
});

// define categories route
router.get('/categories', (req, res) => {
  res.send('NOT IMPLEMENTED: Category List');
});

// define sections route
router.get('/sections', (req, res) => {
  res.send('NOT IMPLEMENTED: Section List');
});

// define subtasks route
router.get('/subtasks', (req, res) => {
  res.send('NOT IMPLEMENTED: Subtasks List');
});

// define checklists route
router.get('/checklists', (req, res) => {
  res.send('NOT IMPLEMENTED: Checklist Items List');
});


module.exports = router;
