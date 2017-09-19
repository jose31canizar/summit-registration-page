import React, { Component } from 'react'
import './FreePassButton.styl'

class FreePassButton extends Component {
  render() {
    console.log(this.props.openEmailOptIn);
    return (
      <div className="free-pass-button" onMouseDown={this.props.openEmailOptIn}>
        <h2 className='free-pass'>Get Free Pass Now!</h2>
      </div>
    );
  }
}

export default FreePassButton;
