import React, { Component } from 'react'
import './SpeakerIntro.styl'

class SpeakerIntro extends Component {
  render() {
    return (
      <div className="speaker-intro">
        <h2>{this.props.data.title}</h2>
        <h3>{this.props.data.subtitle}</h3>
        <img src={require('../../img/background.png')} />
      </div>
    );
  }
}

export default SpeakerIntro;
