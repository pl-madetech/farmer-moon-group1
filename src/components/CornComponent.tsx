import React from "react";

export class CornComponent extends React.Component<{ cornAmountChanged: (corn: number) => void; corn: number }, {}> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event: any) {
    this.props.cornAmountChanged(event.target.value);
    event.target.value = Math.round(event.target.value);
  }
  render() {
    return (
      <div className="form-group">
        <p>
          <span>Bags of corn: </span>
          <input
            type="number"
            className="form-control"
            onChange={this.handleChange}
            min="0"
            defaultValue={this.props.corn}
            aria-label="Amount"
          ></input>
          <span> @25p per bag</span>
        </p>
      </div>
    );
  }
}
