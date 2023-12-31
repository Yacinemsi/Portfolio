import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import "./sass/App.scss";
import "./sass/mobile.scss";
import "./sass/tablet-landscape.scss";
import "./sass/tablet-portrait.scss";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
