import React, { Component } from 'react'
import FreePassButton from '../FreePassButton/FreePassButton'
import './CallToAction.styl'

class CallToAction extends Component {
  render() {
    return (
      <div className="call-to-action">
        <h2>{this.props.data.title}</h2>
        <FreePassButton />
      </div>
    );
  }
}

export default CallToAction;
