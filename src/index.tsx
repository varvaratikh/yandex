import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.sass";
import { App } from "./App";
import "./styles/constants/colors.sass";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}