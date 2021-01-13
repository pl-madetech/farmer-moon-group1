import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import useConfig from "../components/useConfig";
import { StaticRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "../components/login";

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>RemoteStack</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
      </header>
      <p className="App-intro">
        I have changed the app
        Another change
      </p>
    </div>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}
