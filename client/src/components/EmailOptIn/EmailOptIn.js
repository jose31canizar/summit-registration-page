import React, { Component } from 'react'
import './EmailOptIn.styl'

class EmailOptIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      email: ''
    }
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFirstName(event) {
    this.setState({firstName: event.target.value});
  }
  handleEmail(event) {
    this.setState({email: event.target.value});
  }
  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.email + this.state.firstName + this.state.lastName)
    this.addMember()
    event.preventDefault()
  }
  addMember = () => {
    fetch('/api/addMember', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: this.state.email,
        status: 'subscribed',
        merge_fields: {
          firstName: this.state.firstName
        }
      })
    })
    .then(function(res){
      console.log(res)
    })
    .catch(function(res){
      console.log(res)
    })
  }
  render() {
    return (
      <div className="email-opt-in">
        <div className="registration-block">
          <h1>So close! Complete your registration to access the FREE 7 day FoodBodyLove Summit</h1>
          <h3>World class experts and thought leaders share their best advice on building confidence around food and body.</h3>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="first name" type="text" value={this.state.firstName} onChange={this.handleFirstName} />
            <input placeholder="email" type="text" value={this.state.email} onChange={this.handleEmail} />
            <input type="submit" value="Get Your Free Pass!" />
          </form>
        </div>
      </div>
    );
  }
}

export default EmailOptIn;
