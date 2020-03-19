import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Info from './components/Info.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      app: {},
      editorsChoice: ''
    }
  }

  componentDidMount() {
    var random = Math.floor(Math.random() * 100) + 1;
    axios.get(`/apps/${random}`)
      .then(res => {
        this.setState({
          app: res.data[0]
        });
      })
      .catch(err => {
        if(err) {
          console.log('Error getting data', err);
        }
      })
  }

  render() {
    return (
      <div>
        <Info app={this.state.app}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));