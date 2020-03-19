import React, { Component } from 'react';

const Star = function(props) {
  var stars = props.rating
  console.log(stars)
  return(
    <div className='rating'> {props.rating} {props.ratings} <img className='personLogo' src='https://banner2.cleanpng.com/20180509/klq/kisspng-person-logo-computer-icons-5af2c2026fcf79.460327751525858818458.jpg'></img>
    </div>
  )
}

export default Star;