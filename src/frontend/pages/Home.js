import React from 'react';
import Category from '../components/siteSurvey/Category';
import '@gctools-components/aurora-ds/css/aurora.min.css';

const Home = () => (
  <div className="App">
    <h1>Welcome to the Drone Companion App</h1>
    <p>This app will help you fly safe!</p>
    <Category />
  </div>
);

export default Home;
