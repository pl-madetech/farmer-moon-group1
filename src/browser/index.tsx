import React from "react";
import { render } from "react-dom";

import { Config } from "../server/config";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ConfigContext from "../components/ConfigContext";

import Login from "../components/login";
import Home from "../components/home";
import PrivateRoute from "../Routes/PrivateRoute";
import { RouteProps } from "../Routes/RouteProps";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const config = (window as any).__CONFIG__ as Config;
delete (window as any).__CONFIG__;
/* eslint-enable @typescript-eslint/no-unsafe-member-access */

/**
 * Frontend code running in browser
 */
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <h1 className="App-title">
            <Link className="nav-link" to={RouteProps.LOGIN_URL}>
              {config.app.TITLE}
            </Link>
          </h1>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path={RouteProps.LOGIN_URL}>
                <Login />
              </Route>
              <PrivateRoute exact path={RouteProps.HOME_URL}>
                <Home />
              </PrivateRoute>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

render(
  <ConfigContext.Provider value={config}>
    <App />,
  </ConfigContext.Provider>,
  document.getElementById("root"),
);
