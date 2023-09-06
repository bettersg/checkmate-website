import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-WDQ46XW",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
