import { main } from "consts/routes";
import { isEmpty } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import type { TState } from "store/store.types";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userData = useSelector((state: TState) => state.userData);

  return (
    <Route
      {...rest}
      // eslint-disable-next-line react/jsx-no-bind
      render={(props) =>
        isEmpty(userData) ? (
          <Redirect to={main.root} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
