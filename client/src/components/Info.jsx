import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorChoice: props
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className='info'>
        <img className='image' src={this.props.app.imageUrl}></img>
        <h1 className='name'>{this.props.app.name}</h1>
        <div className='editorsChoice'> <img className='editorsChoice' src='https://lh3.googleusercontent.com/HotsP0KmK4tn0Q8p9szRXtwjD7fZRKu4mFcfJUFoddrGiZefxY7gz4dEGMuH6HsfCymJP6a8MvAwYWrU=s14-rw'></img> Editors' Choice</div>
        <div className='author'>{this.props.app.author}</div>
        <div className='category'> {this.props.app.category}</div>
        <div className='rating'> {this.props.app.rating} {this.props.app.ratings}</div>
        <div className='updatedAt'>Updated: {this.props.app.updatedAt}</div>
        <div className='installs'>Installs: {this.props.app.installs}</div>
        <div className='size'> Size: {this.props.app.size}</div>
        <div className='currentVersion'>Current Version: {this.props.app.currentVersion}</div>
        <div className='wishlist'>Add to Wishlist</div>
        <button className='install-button'>Install</button>
        <button className='add-info-button'>Show Additional Information</button>
      </div>
    )
  }
}

export default Info;