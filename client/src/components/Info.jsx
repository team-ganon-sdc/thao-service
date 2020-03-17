import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorChoice: ''
    }
    this.editorChoiceLogo = this.editorChoiceLogo.bind(this);
  }
  editorChoiceLogo() {
    console.log(this.props)
  }
  render() {
    return (
      <div className='info'>
        <div className='image-row'>
        <img className='image' src={this.props.app.imageUrl}></img>
        </div>
        <div className='appInfo'>
            <div className='row0'>
              <div className='row0item1'>
                <h1 className='name'>{this.props.app.name}</h1>
              </div>
              <div className='row0item2'>
                <img src='https://lh3.googleusercontent.com/HotsP0KmK4tn0Q8p9szRXtwjD7fZRKu4mFcfJUFoddrGiZefxY7gz4dEGMuH6HsfCymJP6a8MvAwYWrU=s14-rw'></img>
                <span> Editors' Choice</span>
              </div>
            </div>
            <div className='row1'>
              <div className='row1item1'>
                <span className='author'>{this.props.app.author}</span>
                <span className='category'> {this.props.app.category}</span>
              </div>
              <div className='row1item2'>
                <span className='rating'> {this.props.app.rating}</span>
              </div>
            </div>
            <div className='row2'>
              <span className='updatedAt'>Updated: {this.props.app.updatedAt}</span>
            </div>
            <div className='row3'>
              <span className='installs'>Installs: {this.props.app.installs}</span>
              <span className='size'> Size: {this.props.app.size}</span>
            </div>
            <div className='row4'>
              <div className='row4item1'>
                <div className='wishlist'>Add to Wishlist</div>
              </div>
              <div className='row4item2'>
                <button className='install-button'>Install</button>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Info;