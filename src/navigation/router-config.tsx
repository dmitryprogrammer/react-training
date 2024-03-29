import {ReactElement} from "react";
import {Route, Routes} from "react-router-dom";

import {State} from "../pages/state/state";
import {Effect} from "../pages/effect/effect";
import {Context} from "../pages/context/context";
import {RefHook} from "../pages/ref/ref";
import {NonHook} from "../pages/non-hooks/non-hook";

export function RouterConfig(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<State />} />
      <Route path="/non-hook" element={<NonHook />} />+
      <Route path="/effect" element={<Effect />} />
      <Route path="/context" element={<Context />} />
      <Route path="/ref" element={<RefHook />} />
    </Routes>
  );
}
