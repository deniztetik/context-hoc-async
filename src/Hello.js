import React, { Component } from 'react';
import { withContext } from './index';

class Name extends Component {
  async componentDidMount() {
    const name = await delay('React', 0);
    this.props.setName(name);
  }
  
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default withContext(Name);

// simulate an API Call
const delay = (value, time = 0) => 
  new Promise((resolve) => 
    setTimeout(() => resolve(value), time)
  );
