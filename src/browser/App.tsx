import "./App.css";

import React from "react";
import { CostComponent } from "../components/CostComponent";
import { CornComponent } from "../components/CornComponent";

export default class App extends React.Component<{},  {corn: number}> {
  constructor(props: any) {
    super(props);
    this.state = {
      corn: 0
    };
    this.cornAmountChanged = this.cornAmountChanged.bind(this);
  }
  cornAmountChanged(corn: number) {
    this.setState({...this.state, corn});
  }
  render() {
    return <div className="App">
      <header className="App-header">
        <h1 className="App-title">Cornundrum</h1>
      </header>
      <CornComponent cornAmountChanged={this.cornAmountChanged} corn={this.state.corn} />
      <CostComponent corn={this.state.corn} />
    </div>
  };
}
