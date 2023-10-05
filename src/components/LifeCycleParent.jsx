import React, { Component } from 'react';
import LifeCycleChild from './LifeCycleChild';

class LifeCycleParent extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Kushagra',
    };
    console.log('LifeCycleParent Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleParent getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleParent componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('LifeCycleParent shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleParent getSnapshotBeforeUpdate');
    return null
  }

  componentDidUpdate() {
    console.log('LifeCycleParent componentDidUpdate');
  }

  changeState = () => {
    this.setState({
      name: 'Batman',
    });
  };

  render() {
    console.log('LifeCycleParent render');
    return (
      <div>
        <h1>LifeCycle Parent</h1>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleChild></LifeCycleChild>
      </div>
    );
  }
}

export default LifeCycleParent;
