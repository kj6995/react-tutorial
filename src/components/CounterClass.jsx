import React, { Component } from "react";

class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 11,
      name: "",
    };
  }

  componentDidMount() {
    // document.title = `Click: ${this.state.count}`;
    this.interval = setInterval(() => {
      console.log("Hello!");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.count !== this.state.count) {
    //   console.log("Updating document Title");
    //   document.title = `Click: ${this.state.count}`;
    // }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  increment() {
    // this.state.count = this.state.count + 1;
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log('inside setstate:', this.state.count);
    //   }
    // );
    // console.log(this.state.count);

    // console.log(this.state.count); //calls are async always use callback
    this.setState(
      (prevState, props) => ({
        count: prevState.count + 1, // props.addValue
      }),
      () => {
        console.log(this.state.count);
      }
    );
  }

  incrementThree() {
    // setInterval(() => {
    this.increment();
    this.increment();
    this.increment();
    // }, 2000);
  }

  render() {
    return (
      <div>
        {/* <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        /> */}
        <h1>{this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        {/* <button onClick={() => this.incrementThree()}>Increment 3 times</button> */}
      </div>
    );
  }
}

export default CounterClass;
