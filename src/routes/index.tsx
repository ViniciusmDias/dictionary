import { Routes, Route, useLocation } from "react-router-dom";
import { Dictionary } from "../pages/Dictionary";
import Default from "../styles/layouts/default";

export function Router() {
  const location = useLocation();

  const state = location.state as { backgroundLocation?: Location };
  return (
    <Routes location={state?.backgroundLocation || location}>
      <Route path="/" element={<Default />}>
        <Route index element={<Dictionary />} />
      </Route>
    </Routes>
  );
}
