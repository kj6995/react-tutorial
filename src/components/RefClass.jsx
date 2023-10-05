import React, { Component } from "react";

class RefClass extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    // Older approach (2nd Approach) using Callback Ref
    // this.cbRef = null;
    // this.setCbRef = (element) => {
    //   this.cbRef = element;
    // };
  }

  componentDidMount() {
    console.log(this.inputRef);
    this.inputRef.current.focus();
    // if (this.cbRef) {
    //   this.cbRef.focus();
    // }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
    // alert(this.cbRef.value);

  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        {/* <input type="text" ref={this.setCbRef} /> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefClass;
