import React, { Component } from 'react';

import Star from './Star.jsx';

const Info = function(props) {
  var editorsChoiceLogo = '';
  var editorsChoice = '';

  if (props.app.editorChoice === true) {
    editorsChoiceLogo = 'https://lh3.googleusercontent.com/HotsP0KmK4tn0Q8p9szRXtwjD7fZRKu4mFcfJUFoddrGiZefxY7gz4dEGMuH6HsfCymJP6a8MvAwYWrU=s14-rw';
    editorsChoice = " Editors' Choice";
  }

  return (
    <div className='info'>
      <img className='image' src={props.app.imageUrl}></img>
      <div className='name'>{props.app.name}</div>
      <div className='editorsChoice'> <img src={editorsChoiceLogo}></img> {editorsChoice}</div>
      <div className='author'>{props.app.author}</div>
      <div className='category'> {props.app.category}</div>
      <Star rating={props.app.rating} ratings={props.app.ratings}/>
      <div className='updatedAt'><div className='title'>Updated </div> {props.app.updatedAt}</div>
      <div className='installs'><div className='title'>Installs</div> {props.app.installs}</div>
      <div className='ads'><div className='contains'>Contains Ads</div><img className='caution' src='https://w1.pngwave.com/png/693/31/638/warning-icon-red-triangle-sign-line-signage-traffic-sign-symbol-png-clip-art.png'></img>You don't have any devices.</div>
      <div className='size'> <div className='title'>Size</div> {props.app.size}</div>
      <div className='currentVersion'><div className='title'>Current Version</div> {props.app.currentVersion}</div>
      <div className='wishlist'><img className='wishlistLogo' src='https://cdn0.iconfinder.com/data/icons/mix-of-simple-vol-4/57/02-512.png'></img>Add to Wishlist</div>
      <button className='install-button'>Install</button>
      <div className='add-info'> <u>Additional Information</u></div>
    </div>
  )
}


export default Info;