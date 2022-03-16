import React from "react";
import "./style.css";
//class calculator
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { firstNumber: "", secondNumber: "" };
  }

  render() {
    return (
      <div>
        <h1>My calculator</h1>
        <div>
          <label>First Number</label>
          <input
            type="number"
            id="first"
            onChange={(sum) => this.setState({ firstNumber: sum.target.value })}
            value={this.state.firstNumber}
          />
          <br></br>
        </div>
        <div>
          <br></br>
          <label>Second Number</label>
          <input
            type="number"
            id="second"
            onChange={(sum) =>
              this.setState({ secondNumber: sum.target.value })
            }
            value={this.state.secondNumber}
          />
        </div>
        <br></br>
        <input
          id="addButton"
          type="submit"
          onClick={() => this.sum()}
          value="Calculate"
        ></input>
      </div>
    );
  }
  sum() {
    var firstNumber = Number.parseInt(this.state.firstNumber);
    var secondNumber = Number.parseInt(this.state.secondNumber);
    var sum = firstNumber + secondNumber;
    var subtraction = firstNumber - secondNumber;
    var multiplication = firstNumber * secondNumber;
    var division = firstNumber / secondNumber;
    console.log("Addition" + sum);
    console.log("Subtraction" + subtraction);
    console.log("Multiplication" + multiplication);
    console.log("Division" + division);

   }
}
export default Calculator;
