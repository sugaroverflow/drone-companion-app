const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mcache = require('memory-cache');
const db = require('./models/db');
const seed = require('./models/seed/seed-db');

app.set('view engine', 'jade');


//  Connect routes
app.use('/api/phases', require('./routes/router'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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

// app.listen(process.env.PORT || 8080,
// () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

// Uncomment below to Seed Database First
// db.sequelize
//   .sync({ force: true })
//   .then(() => {
//     seed.insert();
//   })
//   .then(() => {
//     app.listen(process.env.PORT || 8080, () => {
//       console.log(`running server on port ${process.env.PORT || 8080}`);
//     });
//   });

// db.sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });

// db.sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });

// connect to DB then run server
db.sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT || 8080, () => {
    console.log(`running server on port ${process.env.PORT || 8080}`);
  });
});
