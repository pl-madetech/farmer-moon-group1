import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import useConfig from "../components/useConfig";
import { StaticRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "../components/login";
import Home from "../components/home";

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <h1 className="App-title">{config.app.TITLE}</h1>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/sign-in" component={Login} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}
