import React from "react";

export class CornComponent extends React.Component<{ cornAmountChanged: (corn: number) => void; corn: number }, {}> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event: any) {
    this.props.cornAmountChanged(event.target.value);
  }
  render() {
    return (
      <div>
        <p>
          <span>Bags of corn: </span>
          <input type="number" onChange={this.handleChange} defaultValue={this.props.corn}></input>
          <span> @25p per bag</span>
        </p>
      </div>
    );
  }
}
