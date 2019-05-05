const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();


app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.get('/api/modules', (req, res) => {
  const contents = fs.readFileSync(path.resolve(__dirname, './data/moduleData.json'));
  const jsonContent = JSON.parse(contents);
  res.json(jsonContent);
});

app.get('/api/phases/:moduleId', (req, res) => {
  const contents = fs.readFileSync(path.resolve(__dirname, './data/phaseData.json'));
  const { moduleId } = req.params;
  const jsonContent = JSON.parse(contents);
  const filtered = jsonContent.filter(item => item.module_id === moduleId);
  res.json(filtered);
});

app.get('/api/tasks/:phaseId', (req, res) => {
  const contents = fs.readFileSync(path.resolve(__dirname, './data/taskData.json'));
  const { phaseId } = req.params;
  const jsonContent = JSON.parse(contents);
  const filtered = jsonContent.filter(item => item.phase_id === phaseId);
  res.json(filtered);
});


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
