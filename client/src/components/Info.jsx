import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addInfo: 'none'
    }
  }


  handleAdditionalInfoClick() {
    this.setState({
      addInfo: 'inline'
    })
  }
  render() {
    return (
      <div className='info'>
        <img className='image' src={this.props.app.imageUrl}></img>
        <div className='name'>{this.props.app.name}</div>
        <div className='editorsChoice'> <img src='https://lh3.googleusercontent.com/HotsP0KmK4tn0Q8p9szRXtwjD7fZRKu4mFcfJUFoddrGiZefxY7gz4dEGMuH6HsfCymJP6a8MvAwYWrU=s14-rw'></img> Editors' Choice</div>
        <div className='author'>{this.props.app.author}</div>
        <div className='category'> {this.props.app.category}</div>
        <div className='rating'> {this.props.app.rating} {this.props.app.ratings} <img className='personLogo' src='https://lh3.googleusercontent.com/proxy/h3d4YAuruA2cpf0RyIh-94bEwSGd2DBcZkqFNYOlWlReEgqQe-JA5zTT06MoHr26ZTdtX37XRh2PrhROiCg61KDZgG4mbm9NFA5UBhkCuPzS0FJMe9xkMN8JrV3GxOebhy2s3DZF_sPjHA'></img></div>
        <div className='updatedAt addInfo'>Updated: {this.props.app.updatedAt}</div>
        <div className='installs addInfo'>Installs: {this.props.app.installs}</div>
        <div className='ads'><div className='contains'>Contains Ads</div><img className='caution' src='https://w1.pngwave.com/png/693/31/638/warning-icon-red-triangle-sign-line-signage-traffic-sign-symbol-png-clip-art.png'></img>You don't have any devices.</div>
        <div className='size addInfo'> Size: {this.props.app.size}</div>
        <div className='currentVersion addInfo'>Current Version: {this.props.app.currentVersion}</div>
        <div className='wishlist'>Add to Wishlist</div>
        <button className='install-button'>Install</button>
        <div className='add-info'> <u>Additional Information</u></div>
      </div>
    )
  }
}

export default Info;