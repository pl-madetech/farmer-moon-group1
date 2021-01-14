import React from "react";
import _ from "lodash";
import { calculateCost, isPossibleJourney, journeySteps } from "../business/costCalculator";

export class CostComponent extends React.Component<{ corn: number; goose: number }, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className={!isPossibleJourney(this.props) ? "hidden" : ""}>
        <p>
          <span>My total journey will cost </span>
          <span><b>{calculateCost(this.props)}p</b></span>
        </p>
        <span>
          <p className="display-linebreak">{journeySteps(this.props)}</p>
        </span>
      </div>
    );
  }
}
