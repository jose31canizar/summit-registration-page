import React, { Component } from 'react'
import './Host.styl'

class Host extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 560
    }
  }
  componentDidMount() {
    const w = Math.max(document.body.clientWidth, window.innerWidth || 0)
    if (w < 568) {
      this.setState({
        width: 220
      })
    } else if (w < 700) {
      this.setState({
        width: 230
      })
    } else if(w < 1000) {
      this.setState({
        width: 400
      })
    } else {
      this.setState({
        width: 560
      })
    }
    window.addEventListener('resize', () => {
      const w = Math.max(document.body.clientWidth, window.innerWidth || 0)
      //iphone 5 - 6
      if (w < 568) {
        this.setState({
          width: 220
        })
      } else if (w < 700) {
        this.setState({
          width: 230
        })
      } else if(w < 1000) {
        this.setState({
          width: 400
        })
      } else {
        this.setState({
          width: 560
        })
      }
    })
  }
  render() {
    // const topDescription = this.props.data.paragraphs.slice(0, 3)
    // const bottomDescription = this.props.data.paragraphs.slice(3, 5)
    return (
      <div className="host">
        <h2>{this.props.data.title}</h2>
        <div className='top-description'>
          <div className='media'>
            <img src={require('../../img/host-jessica.jpg')} />
          </div>
          <div className='right-description'>
            <h4>{this.props.data.description}</h4>
            {this.props.data.paragraphs.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Host;
