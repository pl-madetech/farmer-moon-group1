import React from "react";
import _ from "lodash";
import { calculateCost, isPossibleJourney } from "../business/costCalculator";

export class CostComponent extends React.Component<{ corn: number, goose: number }, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <p className={!isPossibleJourney(this.props) ? "hidden" : ""}>
        <span>My total journey will cost </span>
        <span>{calculateCost(this.props)}p</span>
      </p>
    );
  }
}
