import React, { Component } from 'react';

class EventBinding extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello',
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log('123');
    this.setState({
      message: 'Bye',
    });
  }

  // clickHandler = () => {
  //   console.log('123');
  //   this.setState({
  //     message: 'Bye',
  //   });
  // };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>Change</button>
        {/* <button onClick={this.clickHandler.bind(this)}>Change (Performance issue)</button> */}
        {/* <button onClick={() => this.clickHandler()}>Change</button> */}
      </div>
    );
  }
}

export default EventBinding;
