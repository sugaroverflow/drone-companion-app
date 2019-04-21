import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ListPage from './pages/List';
import './app.css';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/list" component={ListPage} />
      </Switch>
    </div>
  );
}

export default App;
