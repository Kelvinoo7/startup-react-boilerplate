import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import DefaultErrorBoundary from "./defaultErrorBoundary";
import "./styles";

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById("app")
);
