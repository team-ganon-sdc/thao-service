import React from 'react';
import ReactDOM from 'react-dom';

import sample from '../../database/seed.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  handleClick() {
    console.log('hi')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Hello</button>
        <Info />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));