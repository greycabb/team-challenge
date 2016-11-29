import React from 'react';
import SignUpForm from './TeamSignUp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // When the app receives the form submission, we have succeeded
  // (this.state.success determines whether to render the success message)
  handleSubmit(event) {
    event.preventDefault();
    // console.log('Received form submission!');
    this.setState({
      success: true
    });
  }

  render() {
    return (
      <div className="container">
          <h1>Sign Up</h1>
          <p>Our service is fun and awesome, but you must be 13 years old to join</p>
          
          {this.state.success &&
            <SuccessMessage />
          }
          <SignUpForm handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

// Conditionally-rendered message shown upon successful sign up
class SuccessMessage extends React.Component {
  render() {
    return (
      <div className="alert alert-success" role="alert">Thanks for signing up!!</div>
    );
  }
}

export default App;
