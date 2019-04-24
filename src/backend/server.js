const express = require('express');
const os = require('os');

const app = express();
const ssRouter = require('./routes/siteSurvey');

app.use(express.static('dist'));

// Test username retrieval
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// Use route for siteSurvey api.
app.use('/api/siteSurvey', ssRouter);

/* @todo React router routes to implement here or with the router */
/*
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sitesurvey" component={SiteSurveyPage} />
        <Route path="/category/:id" component={CategoryPage} />
        <Route path="/phase/:id" component={PhasePage} />
        <Route path="/task/:id" component={TaskPage} />
        <Route path="/subtask/:id" component={SubtaskPage} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/about-us" to="/about" />
        <Redirect from="/about/*" to="/about" />
        <Route component={PageNotFound} />
      </Switch>
*/

// For 404 errors?
// app.use('*', (req, res) => {
//   res.status(404).send({ error: 'Not found' });
// });

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
