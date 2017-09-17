import React, { Component } from 'react'
import './Speakers.styl'

class Speakers extends Component {
  render() {
    return (
      <div className="speakers">
        {this.props.data.speakers.map((speaker, i) => (
          <div className="speaker">
            <img src={require(`../../img/${speaker.image}.png`)} />
            <h2>{speaker.name}</h2>
            <p>{speaker.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Speakers;
