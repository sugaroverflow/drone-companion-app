import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import About from './pages/About';
import Modules from './components/Module/Modules';
import Phases from './components/Phase/Phases';
import Tasks from './components/Task/Tasks';
import Steps from './components/Step/Steps';
import Guidances from './components/Guidance/Guidances';
import PageNotFound from './pages/PageNotFound';
import '@gctools-components/aurora-ds/css/aurora.min.css';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Drone Companion App'
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <Header title={title} />
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <main id="main-content" role="main">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Modules} />
              <Route exact path="/modules/" component={Modules} />
              <Route exact path="/about" component={About} />
              <Route exact path="/modules/:moduleOId/phases/" component={Phases} />
              <Route exact path="/modules/:moduleOId/phases/:phaseOId/tasks/" component={Tasks} />
              <Redirect exact from="/modules/:moduleOId/phases/:phaseOId/tasks/:taskOId/steps/" to="/modules/:moduleOId/phases/:phaseOId/tasks/:taskOId/steps/1" />
              <Route exact path="/modules/:moduleOId/phases/:phaseOId/tasks/:taskOId/steps/:stepOId" component={Steps} />
              <Route exact path="/modules/:moduleOId/phases/:phaseOId/tasks/:taskOId/steps/:stepOId/guidances/" component={Guidances} />
              {/* <Route exact path="/modules/:moduleId/phases/:phaseId/tasks/:taskId/steps/:stepId/guidances/:guidanceId" component={Guidance} /> */}
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}
