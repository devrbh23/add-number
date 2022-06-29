import React, {Component} from 'react';

export class Sum extends Component {
  state = {
    number1: 0,
    number2: 0,
    sum: 0,
  };

  number1 = (e) => {
    console.log(e);
    this.setState({[e.target.name]: Number(e.target.value)});

    console.log(e.target.value);
  };

  number2 = (e) => {
    this.setState({[e.target.name]: Number(e.target.value)});
    console.log(e.target.value);
  };

  sum = (e) => {
    this.setState({
      sum: this.state.number1 + this.state.number2,
    });
    console.log(this.state.sum);
  };

  render() {
    return (
      <div>
        <div>
          <input type="number" name="number1" onChange={this.number1}></input>
          <br />
          <br />
          <input type="number" name="number2" onChange={this.number2}></input>
          <br />
          <br />
          <input type="submit" value="sum" onClick={this.sum} />
          <br />
          <br />
          <div>Answer Is: {this.state.sum}</div>
        </div>
      </div>
    );
  }
}

export default Sum;
