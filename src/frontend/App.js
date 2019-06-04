import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ModuleHome from './components/Module/ModuleHome';
import About from './pages/About';
import Module from './components/Module/Modules';
import Phase from './components/Phase/Phases';
import Task from './components/Task/Tasks';
import Step from './components/Step/Step';
import Guidance from './components/Guidance/Guidances';
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
        <main id="main-content" role="main">
          <div className="container">
            <Switch>
              <Route exact path="/" component={ModuleHome} />
              <Route exact path="/modules/" component={ModuleHome} />
              <Route exact path="/about" component={About} />
              <Route exact path="/modules/:moduleId/phases/" component={Module} />
              <Route exact path="/modules/:moduleId/phases/:phaseId/tasks/" component={Phase} />
              {/* <Route exact path="/modules/:moduleId/phases/:phaseId/tasks/:taskId/steps/" component={Task} />
              <Route exact path="/modules/:moduleId/phases/:phaseId/tasks/:taskId/steps/:stepId/guidances/" component={Step} />
              <Route exact path="/modules/:moduleId/phases/:phaseId/tasks/:taskId/steps/:stepId/guidances/:guidanceId" component={Guidance} /> */}
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}
