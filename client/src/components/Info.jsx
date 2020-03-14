import React from 'react';

class Info extends React.Component {
  render() {
    return (
      <h1>{this.props.app.name}</h1>
    )
  }
}

export default Info;