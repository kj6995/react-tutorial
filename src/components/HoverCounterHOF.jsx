import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

class HoverCounterHOF extends Component {
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
        {/* <div onMouseOver={this.incrementCount}>
          Hovered {this.state.count} times
        </div> */}
        {/* <div onMouseOver={this.incrementCount}>
          {this.props.name} Hovered {this.state.count} times
        </div> */}
        <div onMouseOver={this.props.incrementCount}>
          Hovered {this.props.count} times
        </div>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounterHOF);
