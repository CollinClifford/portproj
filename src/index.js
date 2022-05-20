import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <video autoPlay loop muted id="video">
        {/* <source src={backgroundVideo} type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
      <App />
      {/* Stock footage by <a href="http://www.videezy.com">Videezy</a> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
