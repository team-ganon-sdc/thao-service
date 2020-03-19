import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Info from './components/Info.jsx';
import Star from './components/Star.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      app: {},
      editorsChoiceLogo: '',
      editorsChoice:''
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
      .then(()=> {
        if(this.state.app.editorChoice === true) {
          this.setState({
            editorsChoiceLogo:'https://lh3.googleusercontent.com/HotsP0KmK4tn0Q8p9szRXtwjD7fZRKu4mFcfJUFoddrGiZefxY7gz4dEGMuH6HsfCymJP6a8MvAwYWrU=s14-rw',
            editorsChoice:" Editors' Choice"
          })
        }
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
        <Info app={this.state.app} editorsChoiceLogo={this.state.editorsChoiceLogo} editorsChoice={this.state.editorsChoice}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));