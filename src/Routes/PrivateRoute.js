import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, logged, setLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!logged) {
          return (
            <Redirect
              to={{
                pathname: "/dev",
                state: { flashInfo: "Please log in to continue." },
              }}
            />
          );
        } else {
          return <Component {...props} logged={logged} setLogged={setLogged} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
