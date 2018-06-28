import React, { Component } from 'react';
import Name from './Hello';

const MessageContext = React.createContext();

class MessageContainer extends Component {
  state = {
    name: 'Angular',
    setName: this.setName,
  }

  async componentDidMount() {
    await this.setName('React');
  }

  /* Put actions here */
  async setName(name) {
    const nameResponse = await delay(name, 3000);
    this.setState({ name: nameResponse });
  }

  render() {
    return (
      <MessageContext.Provider value={this.state}>
        <Name />
      </MessageContext.Provider>
    );
  }
}

export default MessageContainer;

export function withMessageContext(Component) {
  return (props) => (
    <MessageContext.Consumer>
      {contextProps =>
        /* override contextprops if prop of same name is manually added */
        <Component {...contextProps} {...props} />
      }
    </MessageContext.Consumer>
  );
}

// simulate an API Call
const delay = (value, time = 0) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(value), time)
  );
