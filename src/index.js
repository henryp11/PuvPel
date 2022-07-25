import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import "./styles/icomoon/fonts.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
