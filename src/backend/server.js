const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//  Connect routes
app.use('/api/modules', require('./routes/module.router'));
// app.use('/api/phases', require('./routes/phase.router'));
// app.use('/api/tasks', require('./routes/task.router'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('build'));

if (process.env.NODE_ENV === 'production') {
  app.use('/build/images/', express.static(path.join(__dirname, 'images')));
} else {
  app.use('/public/images/', express.static(path.join(__dirname, 'images')));
}

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
