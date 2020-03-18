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
        <img src='https://lh3.googleusercontent.com/HotsP0KmK4tn0Q8p9szRXtwjD7fZRKu4mFcfJUFoddrGiZefxY7gz4dEGMuH6HsfCymJP6a8MvAwYWrU=s14-rw'></img>
        <span> Editors' Choice</span>
        <span className='author'>{this.props.app.author}</span>
        <span className='category'> {this.props.app.category}</span>
        <span className='rating'> {this.props.app.rating}</span>
        <span className='updatedAt'>Updated: {this.props.app.updatedAt}</span>
        <span className='installs'>Installs: {this.props.app.installs}</span>
        <span className='size'> Size: {this.props.app.size}</span>
        <div className='wishlist'>Add to Wishlist</div>
        <button className='install-button'>Install</button>
      </div>
    )
  }
}

export default Info;