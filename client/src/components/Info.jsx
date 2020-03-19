import React from 'react';

import Star from './Star.jsx';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='info'>
        <img className='image' src={this.props.app.imageUrl}></img>
        <div className='name'>{this.props.app.name}</div>
        {<div className='editorsChoice'> <img src={this.props.editorsChoiceLogo}></img> {this.props.editorsChoice}</div>}
        <div className='author'>{this.props.app.author}</div>
        <div className='category'> {this.props.app.category}</div>
        <Star rating={this.props.app.rating} ratings={this.props.app.ratings}/>
        <div className='updatedAt'><div className='title'>Updated </div> {this.props.app.updatedAt}</div>
        <div className='installs'><div className='title'>Installs</div> {this.props.app.installs}</div>
        <div className='ads'><div className='contains'>Contains Ads</div><img className='caution' src='https://w1.pngwave.com/png/693/31/638/warning-icon-red-triangle-sign-line-signage-traffic-sign-symbol-png-clip-art.png'></img>You don't have any devices.</div>
        <div className='size'> <div className='title'>Size</div> {this.props.app.size}</div>
        <div className='currentVersion'><div className='title'>Current Version</div> {this.props.app.currentVersion}</div>
        <div className='wishlist'><img className='wishlistLogo' src='https://cdn0.iconfinder.com/data/icons/mix-of-simple-vol-4/57/02-512.png'></img>Add to Wishlist</div>
        <button className='install-button'>Install</button>
        <div className='add-info'> <u>Additional Information</u></div>
      </div>
    )
  }
}

export default Info;