import React, { Component } from "react";
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';


// IF Parent Doesn't Re render then children won't also get rerendered
class ParentOfPureComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "Kushagra",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Batman",
      });
    }, 2000);
  }

  render() {
    console.log("Parent Component Render")
    return (
      <div>
        Pure Component Parent
        {/* <RegComp name = {this.state.name} />
        <PureComp name = {this.state.name} /> */}
        {/* Pure Component Does Shallow Props and state comparison */}
        <MemoComp name = {this.state.name} />

      </div>
    );
  }
}

export default ParentOfPureComp;
