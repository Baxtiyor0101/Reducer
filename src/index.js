import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StudentCom from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StudentCom>
      <App />
    </StudentCom>
  </React.StrictMode>
);
