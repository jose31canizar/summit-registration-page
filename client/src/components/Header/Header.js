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
            <div className="wistia_responsive_padding" style={{position:'relative', width: '55%', marginLeft: '5%'}}>
            <div className="wistia_responsive_wrapper" style={{height:'100%',left:'0',position:'relative',top:'0',width:'100%', display: 'flex', justifyContent: 'center'}}>
            <iframe src="https://fast.wistia.net/embed/iframe/fswqtkvea9" title="Wistia video player" allowTransparency="true" frameBorder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowFullScreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="720" height="405"></iframe>
            <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
            </div>
            </div>
          <div className='description'>
            <p>{this.props.data.description}</p>
            <p>{this.props.data.offer}</p>
            <div className='ticket'>
              <img src={require('../../img/header-ticket.png')} />
              <p><b>Grab your free pass to the </b><span>FoodBodyLove Summit</span> ($997 Value)</p>
            </div>
          </div>
        </div>

        <FreePassButton openEmailOptIn={this.props.openEmailOptIn}/>
      </div>
    );
  }
}

export default Header;
