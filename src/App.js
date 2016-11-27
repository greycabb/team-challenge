import React from 'react';
import SignUpForm from './TeamSignUp';

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <h1>Sign Up</h1>
          <p>Our service is fun and awesome, but you must be 13 years old to join</p>
          <SignUpForm />
        </div>
      </div>
    );
  }
}

export default App;
