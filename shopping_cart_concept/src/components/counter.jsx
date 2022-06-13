import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    items: ["item1", "item2", "item3"],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  //   made the method to dynamically access the object with =>
  handleIncrement = (product) => {
    // this.props.value = 0;
    this.setState({ value: this.state.value + 1 });
  };
  handleDelete = counterId => {
    // This method creates a list and update it when an item is popped out of it and let React update the state of the object
    const counters = this.state.counters.filter(
      (c_id) => c_id.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        <span className={classes}>Count: {this.formatCount()}</span>
        <button
          onClick={() => this.props.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={()=>this.props.handleDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {
          <div>
            {this.props.children}
            {this.state.items.length === 0 &&
              "Please add an item to your cart!"}
            {/* {this.renderTags()} */}
          </div>
        }
      </div>
    );
  }
  renderTags() {
    if (this.state.items.length === 0)
      return <p>There are no items in the cart!</p>;
    return (
      <ul>
        {this.state.items.map((items) => (
          <li key={items}>{items}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
