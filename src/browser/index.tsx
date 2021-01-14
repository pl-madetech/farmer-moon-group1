import React from "react";
import { render } from "react-dom";

import { Config } from "../server/config";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ConfigContext from "../components/ConfigContext";

import PrivateRoute from "../Routes/PrivateRoute";
import { RouteProps } from "../Routes/RouteProps";

import AuthButton from "../components/AuthButton";
import NotFound from "../components/NotFound";
import Login from "../components/login";
import Home from "../components/home";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import logo from "../../public/corn-bag.png";

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
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between fixed-top">
          <a href={RouteProps.LOGIN_URL}>
            <img src={logo} width="60" height="60" className="d-inline-block align-top" alt="logo"></img>
          </a>
          <h1 className="App-title">{config.app.TITLE}</h1>

          <AuthButton />
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
              <Route path="*">
                <NotFound />
              </Route>
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
