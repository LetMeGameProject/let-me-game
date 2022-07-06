import { Switch, Route } from "react-router-dom";
import { Register } from "../pages/register";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};
