import {ReactElement} from "react";
import {Route, Routes} from "react-router-dom";

import {State} from "../pages/state/state";
import {Effect} from "../pages/effect/effect";

export function RouterConfig(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<State />} />
      <Route path="/effect" element={<Effect />} />
    </Routes>
  );
}
