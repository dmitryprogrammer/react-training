import {createBrowserRouter} from "react-router-dom";
import {Router as RemixRouter} from "@remix-run/router/dist/router";

import {App} from "../app/App";

export const ROUTER_CONFIG: RemixRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
]);
