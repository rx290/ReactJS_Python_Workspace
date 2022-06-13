import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 4 },
    ],
  };

  handleReset = () => {
    const counter = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
  };

  handleIncrement = (counter) => {
    const counter = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>{" "}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
