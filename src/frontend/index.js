import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import '@gctools-components/aurora-ds/css/aurora.min.css';
import './App.css';

import App from './App';

// import i18n (needs to be bundled ;))
import './i18n';

// const axe = require("react-axe");

// if (process.env.NODE_ENV === "development") {
//   axe(React, ReactDOM, 1000);
// }

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('app')
);
