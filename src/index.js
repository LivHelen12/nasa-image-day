import React from "react";
import ReactDOM from "react-dom/client";
import Apod from "./pages/Apod/apod";
import reportWebVitals from "./reportWebVitals";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Apod />
  </React.StrictMode>
);

reportWebVitals();
