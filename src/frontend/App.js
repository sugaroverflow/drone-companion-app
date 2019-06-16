import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import BridgeInPhase from './pages/BridgeInPhase';
import Phases from './components/Phase/Phases';
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
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <main id="main-content" role="main">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/intro/" component={BridgeInPhase} />
              <Route exact path="/phases" component={Phases} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}
