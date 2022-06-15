import "./App.css";
import NavBar from "./components/navbar";
import React from "react";
import Counters from "./components/counters";

function App() {
  return (
    <React.Fragment>
      <NavBar
        // totalCounters={this.props.counters.filter((c) => c.value > 0).length}
      />
      <main className="container">
        <Counters
          // counters={this.state.counters}
          // onReset={this.state.handleReset}
          // onIncrement={this.state.handleIncrement}
          // onDelete={this.state.handleDelete}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
