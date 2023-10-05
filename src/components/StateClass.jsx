import React, { Component } from 'react';

class Stateclass extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome Kushagra State Class',
    };
  }

  changeMessage() {
    this.setState({
      message: 'Welcome Batman',
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Change</button>
      </div>
    );
  }
}

export default Stateclass;
