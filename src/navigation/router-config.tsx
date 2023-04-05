import {ReactElement} from "react";
import {Route, Routes} from "react-router-dom";

import {App} from "../app/App";

export function RouterConfig(): ReactElement {
  return (
    <Routes>
      <Route index="/" element={<App />} />
    </Routes>
  );
}
