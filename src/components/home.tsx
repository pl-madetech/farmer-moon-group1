import React from "react";
import { CostComponent } from "./CostComponent";
import { CornComponent } from "./CornComponent";
import { GooseComponent } from "./GooseComponent";
import {isPossibleJourney} from "../business/costCalculator";

export default class Home extends React.Component<{}, { corn: number, goose: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      corn: 0,
      goose: 0,
    };
    this.cornAmountChanged = this.cornAmountChanged.bind(this);
    this.gooseAmountChanged = this.gooseAmountChanged.bind(this);
  }
  cornAmountChanged(corn: number) {
    this.setState({ ...this.state, corn });
  }
  gooseAmountChanged(goose: number) {
    this.setState({ ...this.state, goose });
  }
  render() {
    return (
      <div className="App">
        <CornComponent cornAmountChanged={this.cornAmountChanged} corn={this.state.corn} />
        <GooseComponent gooseAmountChanged={this.gooseAmountChanged} goose={this.state.goose} />
        <CostComponent corn={this.state.corn} goose={this.state.goose} />
        <span className={isPossibleJourney(this.state) ? "hidden" : ""}>Sorry Farmer Moon, you can't get this stock to market safely.</span>
      </div>
    );
  }
}
