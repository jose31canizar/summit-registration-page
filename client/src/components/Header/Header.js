import React, { Component } from 'react'
import FreePassButton from '../FreePassButton/FreePassButton'
import './Header.styl'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className='headline'>
          <h2>{this.props.data.headline}</h2>
        </div>
        <div className='header-content'>
          <div className='video'>
            <script src="https://fast.wistia.com/embed/medias/fswqtkvea9.jsonp" async>
            </script>
            <script src="https://fast.wistia.com/assets/external/E-v1.js" async>
            </script>
            <div className="wistia_responsive_padding" style={{padding:'56.25% 0 0 0',position:'relative'}}><div className="wistia_responsive_wrapper" style={{height:'100%',left:'0',position:'absolute',top:'0',width:'100%'}}>
            <div className="wistia_embed wistia_async_fswqtkvea9 videoFoam=true" style={{height:'100%',width:'100%'}}>&nbsp;</div></div></div>
          </div>
          <div className='description'>
            <p>{this.props.data.description}</p>
            <p>{this.props.data.offer}</p>
            <div className='ticket'>
              <img src={require('../../img/header-ticket.png')} />
              <p>Grab your free pass to the FoodBodyLove Summit!</p>
            </div>
          </div>
        </div>

        <FreePassButton openEmailOptIn={this.props.openEmailOptIn}/>
      </div>
    );
  }
}

export default Header;

// <iframe src='https://embedwistia-a.akamaihd.net/deliveries/02650eb989ae12d4e7120f3366202c7df100d141/file.mp4' height='400' width='500' frameBorder='0'></iframe>
