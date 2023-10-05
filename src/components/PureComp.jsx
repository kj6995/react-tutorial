import React, { PureComponent } from "react";

/* Pure Component Does Shallow Props and state comparison */
class PureComp extends PureComponent {
  render() {
    console.log("Pure Component Render");

    const { name } = this.props;
    return <h1>Pure Component {name}</h1>;
  }
}

/**
 * var a = 2;
 * var b = 2
 *
 */
export default PureComp;
