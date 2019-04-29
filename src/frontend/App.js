import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Header from './components/common/Header';
import PageNotFound from './pages/PageNotFound';
import SiteSurveyPage from './pages/SiteSurveyPage';
import CategoryPage from './pages/CategoryPage';
import PhasePage from './pages/PhasePage';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sitesurvey" component={SiteSurveyPage} />
        <Route path="/category/:id" component={CategoryPage} />
        <Route path="/phase/:id" component={PhasePage} />
        <Route path="/task/:id" component={TaskPage} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/about-us" to="/about" />
        <Redirect from="/about/*" to="/about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
