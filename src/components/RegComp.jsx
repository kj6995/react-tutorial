import React, { Component } from 'react';

class RegComp extends Component {
  render() {
    console.log("Regular Component Render")
    const { name } = this.props;
    return <h1>Regular Component {name}</h1>;
  }
}

export default RegComp;
