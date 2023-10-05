import React, { Component } from "react";
import InputFn from "./InputFn";

class ForwardingRef extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  clickHandler() {
    this.componentRef.current.focus();
  }

  render() {
    return (
      <div>
        <InputFn ref={this.componentRef} />
        <button onClick={() => this.clickHandler()}>Change</button>
      </div>
    );
  }
}

export default ForwardingRef;
