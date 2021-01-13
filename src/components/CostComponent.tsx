import React from "react";
import _ from 'lodash';

export class CostComponent extends React.Component<{corn: number},  {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return <p>
            <span>My total journey will cost </span>
            <span>{_.round(this.props.corn) * 25}p</span>
        </p>;
    }
  }