import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import $ from 'jquery';
import App from './App';
import '@gctools-components/aurora-ds/css/aurora.min.css';
// import '@gctools-components/aurora-ds/js/aurora.min';


const axe = require('react-axe');

if (process.env.NODE_ENV === 'development') {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
