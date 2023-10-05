import React, { Component } from 'react';

class Propsclass extends Component {
  render() {
    const { name } = this.props;
    return <h1>Welcome {name} class Fn</h1>;
  }
}

export default Propsclass;
