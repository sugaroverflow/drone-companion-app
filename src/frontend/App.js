import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ModuleHome from './components/Module/ModuleHome';
import About from './pages/About';
import Module from './components/Module/Modules';
import Phase from './components/Phase/Phases';
import Task from './components/Task/Tasks';
import PageNotFound from './pages/PageNotFound';
import '@gctools-components/aurora-ds/css/aurora.min.css';
import './css/style.css';

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
              <Route exact path="/about" component={About} />
              <Route path="/modules/:moduleId" component={Module} />
              <Route path="/phases/:phaseId" component={Phase} />
              <Route path="/tasks/:taskId" component={Task} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}
