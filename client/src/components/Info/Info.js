import React, { Component } from 'react'
import FreePassButton from '../FreePassButton/FreePassButton'
import './Info.styl'

class Info extends Component {
  render() {
    const firstRowOfTopics = this.props.data.topics.slice(0,3)
    const secondRowOfTopics = this.props.data.topics.slice(3,6)
    return (
      <div className="info">
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.description.title}</p>
        <div className='reasons'>
          {this.props.data.description.reasons.map((item, i) => (
            <p>{item}</p>
          ))}
        </div>
        <p>{this.props.data.description.conclusion}</p>
        <p>{this.props.data.description.subtitle}</p>
        <div className='first-row-topics'>
          {firstRowOfTopics.map((item, i) => (
            <div className='topic'>
              <img src={require(`../../img/${item.image}.png`)}/>
              <h3>{item.title}</h3>
              {item.facts.map((fact, i) => (
                <p>{fact}</p>
              ))}
            </div>
          ))}
        </div>
        <div className='second-row-topics'>
          {secondRowOfTopics.map((item, i) => (
            <div className='topic'>
              <img src={require(`../../img/${item.image}.png`)}/>
              <h3>{item.title}</h3>
              {item.facts.map((fact, i) => (
                <p>{fact}</p>
              ))}
            </div>
          ))}
        </div>
        <h3 className='epilogue'>{this.props.data.epilogue}</h3>
        <FreePassButton openEmailOptIn={this.props.openEmailOptIn}/>
      </div>
    );
  }
}

export default Info;
