const express = require('express');
const routes = require('./routes');

const app = express();

//  Connect routes
app.use('/', routes);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
