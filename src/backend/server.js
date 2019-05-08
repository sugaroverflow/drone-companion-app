const express = require('express');

const app = express();

//  Connect routes
app.use('/api/modules', require('./routes/module.router'));
// app.use('/api/phases/:moduleId', require('./routes/phases'));
// app.use('/api/tasks/:phaseId', require('./routes/tasks'));


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
