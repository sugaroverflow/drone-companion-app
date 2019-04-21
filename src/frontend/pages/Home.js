import React from 'react';
import { Link } from 'react-router-dom';
import '@gctools-components/aurora-ds/css/aurora.min.css';

const Home = () => (
  <div className="App">
    <h1>Welcome to the Drone Companion App</h1>
    <p>This app will help you fly safe!</p>
    <div className="card mb-2 d-inline-block">
      <div className="card-body">
        <h3 className="card-title h5">Card title</h3>
        <div className="card-subtitle text-muted">Meta Information</div>
        <p className="card-text">Some quick example text to build on the card title</p>
        <Link to="./list"><button type="submit">Link</button></Link>
      </div>
    </div>
  </div>
);

export default Home;
