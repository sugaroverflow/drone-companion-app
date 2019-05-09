const express = require('express');
const os = require('os');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
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
app.use(express.static('dist'));

const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

const Category = require('./models/categoryModel');
const categoryRouter = require('./routes/categoryRouter')(Category);

// const Phase = require('./models/PhaseModel');
// const Task = require('./models/TaskModel');
// const SubTask = require('./models/SubTask');
// const phaseRouter = require('./routes/phaseRouter')(Phase);
// const taskRouter = require('./routes/taskRouter')(Task);
// const subtaskRouter = require('./routes/subtaskRouter')(SubTask);

const connectionString = 'mongodb+srv://xiaowe:FvL2dpYYEu6zy2lZ@cluster0-schlq.azure.mongodb.net/droneCompanion?authSource=admin';

if (process.env.ENV === 'Test') {
  console.log('This is a test');
  // const db = mongoose.connect('mongodb://localhost/bookAPI_Test');
  const db = mongoose.connect(connectionString, { useNewUrlParser: true });
} else {
  console.log('This is for real');
  // const db = mongoose.connect('mongodb://localhost/bookAPI');
  const db = mongoose.connect(connectionString, { useNewUrlParser: true });
}

// Test username retrieval
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.use('/api/books', bookRouter);
app.use('/api/categories', categoryRouter);
// app.use('/api/phases', phaseRouter);
// app.use('/api/tasks', taskRouter);
// app.use('/api/subtasks', subtaskRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
