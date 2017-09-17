import React, { Component } from 'react'
import './Host.styl'

class Host extends Component {
  render() {
    const topDescription = this.props.data.paragraphs.slice(0, 3)
    const bottomDescription = this.props.data.paragraphs.slice(3, 5)
    return (
      <div className="host">
        <h2>{this.props.data.title}</h2>

        <div className='top-description'>
          <img src={require('../../img/host-jessica.png')} />
          <div className='right-description'>
            <h3>{this.props.data.description}</h3>
            {topDescription.map((item, i) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
        <div className='bottom-description'>
          {bottomDescription.map((item, i) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Host;
