import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";

import "./assets/styles/index.scss";
import "./core/i18n";
import {ROUTER_CONFIG} from "./navigation/router-config";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER_CONFIG} />
  </React.StrictMode>
);
