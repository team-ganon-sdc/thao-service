import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Info from './Info.jsx';
import Rating from './Rating.jsx';
import AdditionalInfo from './AdditionalInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app: {},
    }
  }

  componentDidMount() {
    axios.get(`/apps/${this.props.id}`)
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
        <Info app={this.state.app} />
      </div>
    )
  }
}

export default App;