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

app.get('/api/phases', (req, res) => {
  const contents = fs.readFileSync(path.resolve(__dirname, './data/phaseData.json'));
  const jsonContent = JSON.parse(contents);
  res.json(jsonContent);
});

app.get('/api/phases/:moduleId:', (req, res) => {
  console.log('phases for module.');
  const contents = fs.readFileSync(path.resolve(__dirname, './data/phaseData.json'));
  const jsonContent = JSON.parse(contents);
  res.json(jsonContent);
});

app.get('/api/tasks', (req, res) => {
  const contents = fs.readFileSync(path.resolve(__dirname, './data/taskData.json'));
  const jsonContent = JSON.parse(contents);
  res.json(jsonContent);
});


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
