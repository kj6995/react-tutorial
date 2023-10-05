import React, { Component } from 'react';

class LifeCycleChild extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Kushagra',
    };
    console.log('LifeCycleChild Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleChild getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleChild componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('LifeCycleChild shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleChild getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifeCycleChild componentDidUpdate');
  }

  render() {
    console.log('LifeCycleChild render');
    return (
      <div>
        <h1>LifeCycle Child</h1>
      </div>
    );
  }
}

export default LifeCycleChild;
