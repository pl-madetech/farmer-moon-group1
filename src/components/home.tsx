import React from "react";
import { CostComponent } from "./CostComponent";
import { CornComponent } from "./CornComponent";

export default class Home extends React.Component<{}, { corn: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      corn: 0,
    };
    this.cornAmountChanged = this.cornAmountChanged.bind(this);
  }
  cornAmountChanged(corn: number) {
    this.setState({ ...this.state, corn });
  }
  render() {
    return (
      <div className="App">
        <CornComponent cornAmountChanged={this.cornAmountChanged} corn={this.state.corn} />
        <CostComponent corn={this.state.corn} />
      </div>
    );
  }
}
