import { Routes as Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

const Routes = () => (
  <Switch>
    <Route path="/" element={<Dashboard />} />
  </Switch>
);

export default Routes;
