import "./App.css";

import React from "react";

import useConfig from "../components/useConfig";

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
      </header>
    </div>
  );
}
