const express = require('express');

const app = express();

//  Connect routes
app.use('/api/modules', require('./routes/module.router'));
app.use('/api/phases', require('./routes/phase.router'));
app.use('/api/tasks', require('./routes/task.router'));


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
