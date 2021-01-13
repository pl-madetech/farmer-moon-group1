import React from "react";
import { render } from "react-dom";

import { Config } from "../server/config";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Login from "../components/login";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const config = (window as any).__CONFIG__ as Config;
delete (window as any).__CONFIG__;
/* eslint-enable @typescript-eslint/no-unsafe-member-access */

/**
 * Frontend code running in browser
 */
const App = () => (
  <BrowserRouter>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <h1 className="App-title">
          <Link className="nav-link" to={"/dev"}>
            {config.app.TITLE}
          </Link>
        </h1>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path="/dev" component={Login} />
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
