import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "container/LoginForm/LoginForm";
import { NotFound } from "components/NotFound/NotFound";
import Authorized from "layouts/Authorized/Authorized";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import { main } from "consts/routes";

export const MainRoutes = () => (
  <Switch>
    <Route exact={true} path={main.root} component={LoginForm} />
    <Route path={main.login} component={LoginForm} />
    <PrivateRoute path={main.auth} component={Authorized} />
    <Route component={NotFound} />
  </Switch>
);
