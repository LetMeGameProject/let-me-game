import { Switch, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};
