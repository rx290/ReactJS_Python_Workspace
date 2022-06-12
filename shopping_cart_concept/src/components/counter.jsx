import React, { Component } from "react";

class Counter extends Component {

    state = {
        iterator: 0,
        items: ['item1','item2','item3']
    };

    styles= {
        fontSize: 10,
        fontWeight: "bold"
    }

    render() {
        let classes = this.getBadgeClasses();
        return ( <div>
            <span className={classes}>Count: {this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <ul>
                {this.state.items.map((item, ))}
            </ul>
          </div>);
      }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.iterator === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { iterator } = this.state;
        return iterator === 0 ? "Zero" : iterator;
    }
    };




export default Counter;
