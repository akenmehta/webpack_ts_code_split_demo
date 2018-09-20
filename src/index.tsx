import React from 'react';
import ReactDOM from 'react-dom';
import { RouterConfig } from "./RouterConfig";

// create sample App component
class App extends React.Component {
  render() {
    return (
      <RouterConfig />
    );
  }
}

// render inside `app-root` element
ReactDOM.render(<App />, document.getElementById('app-root'));