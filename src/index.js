import React, { Component } from 'react';
import { render } from 'react-dom';
import MessageContainer from './MessageContainer';
import './style.css';

const AppContext = React.createContext();

export function withContext(Component) {
  return (props) => (
    <AppContext.Consumer>
      {contextProps =>
        /* override contextprops if prop of same name is manually added */
        <Component {...contextProps} {...props} />
      }
    </AppContext.Consumer>
  );
}

class App extends Component {
  render() {
    return (
      <AppContext.Provider value={{}}>
        <MessageContainer />
      </AppContext.Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
