import "./App.css";

import React from "react";

class CostComponent extends React.Component<{corn: number},  {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <p>{this.props.corn * 25}p</p>;
  }
}

export default class App extends React.Component<{},  {corn: number}> {
  constructor(props: any) {
    super(props);
    this.state = {
      corn: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event: any) {
    this.setState({corn: event.target.value});
  }
  render() {
    return <div className="App">
      <header className="App-header">
        <h1 className="App-title">Cornundrum</h1>
      </header>
      <p>How many bags of corn do I have?</p>
      <input type="number" onChange={this.handleChange} defaultValue="0"></input>
      <p>@25p per bag, my total journey will cost:</p>
      <CostComponent corn={this.state.corn} />
    </div>
  };
}
