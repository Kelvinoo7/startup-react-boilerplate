import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import DefaultErrorBoundary from "./defaultErrorBoundary";
import "./styles";

if (process.env.NODE_ENV === "development") {
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById("app")
);
