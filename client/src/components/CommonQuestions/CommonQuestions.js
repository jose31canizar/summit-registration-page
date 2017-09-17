import React, { Component } from 'react'
import './CommonQuestions.styl'

class CommonQuestions extends Component {
  render() {
    return (
      <div className="common-questions">
        <h2>Common Questions</h2>
        {this.props.data.map((item, i) => (
          <div className='common-question'>
            <h3>{item.question}</h3>
            {item.answers.map((item, i) => (
              <p>{item}</p>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default CommonQuestions;
