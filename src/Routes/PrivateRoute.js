import React from "react";
import { Redirect, Route } from "react-router-dom";
import useConfig from "../components/useConfig";
import { RouteProps } from "../Routes/RouteProps";

const PrivateRoute = ({ children, ...rest }) => {
  const config = useConfig();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return config.app.IS_AUTHENTICATED ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: RouteProps.LOGIN_URL,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
