import React, {Component} from 'react';

export class AutoSum extends Component {
  state = {
    num1: 0,
    num2: 0,
    sum: 0,
  };
  num1 = e => {
    let num1 = Number(e.target.value);
    this.setState({
      num1: num1,
      sum: num1 + this.state.num2,
    });
  };
  num2 = e => {
    let num2 = Number(e.target.value);
    this.setState({
      num2: num2,
      sum: num2 + this.state.num1,
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.num1} />
        <br />
        <br />
        <input type="text" onChange={this.num2} />
        <br />
        <br />
        <div>sum is:{this.state.sum}</div>
      </div>
    );
  }
}

export default AutoSum;
