import React from "react";
import _ from 'lodash';
import { calculateCost } from "../business/costCalculator";

export class CostComponent extends React.Component<{corn: number},  {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return <p>
            <span>My total journey will cost </span>
            <span>{calculateCost(this.props)}p</span>
        </p>;
    }
  }