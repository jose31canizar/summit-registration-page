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

        <FreePassButton/>
      </div>
    );
  }
}

export default Header;
