import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import "./assets/styles/index.scss";
import "./core/i18n";
import {RouterConfig} from "./navigation";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  </React.StrictMode>
);
