import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import About from './pages/About';
import BridgeInPhase from './pages/BridgeInPhase';
import Phases from './components/Phase/Phases';
import Steps from './components/Step/Steps';
import Guidances from './components/Guidance/Guidances';
import TaskSummary from './components/Task/TaskSummary';
import PreQuiz from './components/Quiz/PreQuiz';
import PostQuiz from './components/Quiz/PostQuiz';
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
    const Loader = () => (
      <div className="App">
        <div>loading...</div>
      </div>
    );
    return (
      <Suspense fallback={<Loader />}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <main id="main-content" role="main">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/intro" component={BridgeInPhase} />
              <Route exact path="/phases" component={Phases} />
              <Redirect exact from="/phases/:phaseOId/tasks/:taskOId/steps/" to="/phases/:phaseOId/tasks/:taskOId/steps/1" />
              <Route exact path="/phases/:phaseOId/tasks/:taskOId/steps/:stepOId" component={Steps} />
              <Route exact path="/phases/:phaseOId/tasks/:taskOId/steps/:stepOId/guidances/" component={Guidances} />
              <Route exact path="/phases/:phaseOId/tasks/:taskOId/summary/" component={TaskSummary} />
              <Route exact path="/phases/:phaseOId/tasks/:taskOId/preQuiz" component={PreQuiz} />
              <Route exact path="/phases/:phaseOId/tasks/:taskOId/postQuiz" component={PostQuiz} />
            </Switch>
          </div>
        </main>
      </Suspense>
    );
  }
}
