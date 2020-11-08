import React from "react";
import { Route, Switch } from "react-router-dom";
import TableComponent from "container/TableComponent/TableComponent";
import TaskForm from "container/TaskForm/TaskForm";
import BoardComponent from "container/BoardComponent/BoardComponent";
import { auth } from "consts/routes";

export const AuthorizedRoutes = (path: string) => {
  return (
    <Switch>
      <Route
        exact={true}
        path={`${path}${auth.tasks}`}
        component={TableComponent}
      />
      <Route
        exact={true}
        path={`${path}${auth.board}`}
        component={BoardComponent}
      />
      <Route
        exact={true}
        path={`${path}${auth.task}/:taskId?`}
        component={TaskForm}
      />
      <Route path={path} component={TableComponent} />
    </Switch>
  );
};
