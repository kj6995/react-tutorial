import React, { Component } from "react";

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      // username: "",
      // topic: "react",
      first: "",
      last: "",
    };
  }

  // inputChangeHandler = (event) => {
  //   this.setState({
  //     username: event.target.value,
  //   });
  // };

  firstChangeHandler = (event) => {
    this.setState({
      first: event.target.value,
    });
  };

  lastChangeHandler = (event) => {
    this.setState({
      last: event.target.value,
    });
  };

  // topicChangeHandler = (event) => {
  //   this.setState({
  //     topic: event.target.value,
  //   });
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      username: "",
      topic: "react",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            value={this.state.first}
            onChange={this.firstChangeHandler}
          />
          <input
            type="text"
            value={this.state.last}
            onChange={this.lastChangeHandler}
          />
          <h2>First : {this.state.first}</h2>
          <h2>Last : {this.state.last}</h2>
          <p>***************************</p>
          {/* <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.inputChangeHandler}
          />
        </div>
        <div>
          <label>Topic:</label>

          <select value={this.state.topic} onChange={this.topicChangeHandler}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select> */}
        </div>
        {/* <button type="submit">Submit</button> */}
      </form>
    );
  }
}

export default Forms;
