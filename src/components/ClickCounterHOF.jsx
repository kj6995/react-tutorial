import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

class ClickCounterHOF extends Component {
    // constructor() {
    //   super();
    //   this.state = {
    //     count: 0,
    //   };
    // }

    // incrementCount = () => {
    //   this.setState((prevState) => {
    //     return { count: prevState.count + 1 };
    //   });
    // };

  render() {
    return (
      <div>
        {/* <button onClick={this.incrementCount}>
          Clicked {this.state.count} times
        </button> */}
        {/* <button onClick={this.incrementCount}>
          {this.props.name} Clicked {this.state.count} times
        </button> */}
        <button onClick={this.props.incrementCount}>
          {this.props.code} Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounterHOF);
