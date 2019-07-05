import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import i18n (needs to be bundled ;))
// import "./i18n";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

import "@gctools-components/aurora-ds/css/aurora.min.css";

const axe = require("react-axe");

if (process.env.NODE_ENV === "development") {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>,
  document.getElementById("app")
);
