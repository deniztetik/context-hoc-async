import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const AppContext = React.createContext();

export function withContext(Component){
    return (props) => (
      <AppContext.Consumer>
        {contextProps => 
          /* override contextprops if prop of same name is manually added */
          <Component {...contextProps } {...props} />
        }
      </AppContext.Consumer>
  );
}

class App extends Component {
  state = {
    name: 'Angular',
  }

  render() {
    return (
      <AppContext.Provider value={{
        name: this.state.name,
        setName: (name) => this.setState({ name }),
      }}>
        <div>
          <Hello />
          <p>
            Start editing to see some magic happen :)
          </p>
      </div>
      </AppContext.Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
