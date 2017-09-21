import React, { Component } from 'react'
import './SpeakerIntro.styl'

class SpeakerIntro extends Component {
  render() {
    return (
      <div className="speaker-intro" style={{backgroundImage: `url(${require('../../img/background.png')})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <h2>{this.props.data.title}</h2>
        <h3>{this.props.data.subtitle}</h3>
      </div>
    );
  }
}

export default SpeakerIntro;
