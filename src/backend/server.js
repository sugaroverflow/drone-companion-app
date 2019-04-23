const express = require('express');
const fs = require('fs');
const os = require('os');

const app = express();
const ssRouter = require('./routes/siteSurvey');

app.use(express.static('dist'));

// Test username retrieval
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// Use route for siteSurvey api.
app.use('/api/siteSurvey', ssRouter);


// An api endpoint that returns siteSurvey related items
// app.get('/siteSurvey', (req, res) => {
//   const fileContents = fs.readFileSync(`${__dirname}/api/checklistItemData.json`, 'utf8');
//   const data = JSON.parse(fileContents);
//   // console.log(data.checklistItems);
//   res.send(data.checklistItems);
// });

// For 404 errors?
// app.use('*', (req, res) => { 
//   res.status(404).send({ error: 'Not found' });
// });

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
