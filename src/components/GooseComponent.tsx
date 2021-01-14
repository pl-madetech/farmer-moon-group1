import React from "react";

export class GooseComponent extends React.Component<{ gooseAmountChanged: (goose: number) => void; goose: number }, {}> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event: any) {
    this.props.gooseAmountChanged(event.target.value);
    event.target.value = Math.round(event.target.value);
  }
  render() {
    return (
      <div className="form-group">
        <p>
          <span>Number of geese: </span>
          <input
            type="number"
            className="form-control"
            onChange={this.handleChange}
            min="0"
            defaultValue={this.props.goose}
            aria-label="Amount"
          ></input>
        </p>
      </div>
    );
  }
}
