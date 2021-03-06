import React from 'react';
import EmailInput from './EmailInput';
import RequiredInput from './RequiredInput';
import PasswordConfirmationInput from './PasswordInput';
import BirthdayInput from './BirthdayInput';

/**
 * The overall form component
 */
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    // Track values and overall validity of each field
    this.initialState = {
      email: { value: '', valid: false },
      name: { value: '', valid: false },
      dob: { value: '', valid: false },
      password: { value: '', valid: false },
      passwordConf: { value: '', valid: false }
    };
    
    // Set state to initial state
    this.state = this.initialState;

    this.updateState = this.updateState.bind(this); //bind for scope
  }

  //callback for updating the state with child information
  updateState(stateChange) {
    this.setState(stateChange);
  }

  //callback for the reset button, resetting the page to its initial state
  handleReset(event) {
    // console.log('Reset!');
    this.updateState(this.initialState);
  }

  // (Removed since only the App needs to handle anything after the signup is successful.
  // and we can just invoke this function from the parent App instead)
  // handleSubmit(event) {
  //   event.preventDefault();
  //   // console.log('Submitted!');
  // }

  render() {
    //if all fields are valid, button should be enabled
    var buttonEnabled = (
      this.state.email.valid &&
      this.state.name.valid &&
      this.state.dob.valid &&
      this.state.password.valid &&
      this.state.passwordConf.valid
    );
    // console.log('Button enabled: ', buttonEnabled, this.state);

    return (
      <form role="form" name="signupForm" onSubmit={(e) => this.props.handleSubmit(e)}>

        <EmailInput value={this.state.email.value} updateParent={this.updateState} />

        <RequiredInput
          id="name" field="name" type="text"
          label="Name" placeholder="your name"
          errorMessage="we need to know your name"
          value={this.state.name.value}
          updateParent={this.updateState} />

        <BirthdayInput value={this.state.dob.value} updateParent={this.updateState} />

        <RequiredInput
          id="password" field="password" type="password"
          label="Password" placeholder=""
          errorMessage="your password can't be blank"
          value={this.state.password.value}
          updateParent={this.updateState} />

        <PasswordConfirmationInput value={this.state.passwordConf.value} password={this.state.password.value} updateParent={this.updateState} />

        {/* Submit Buttons */}
        <div className="form-group">
          <button id="resetButton" type="reset" className="btn btn-default" onClick={(e) => this.handleReset(e)}>Reset</button> {/*space*/}
          <button id="submitButton" type="submit" className="btn btn-primary" disabled={!buttonEnabled} >Sign Me Up!</button>
        </div>

      </form>
    );
  }
}

//exports: DO NOT REMOVE OR CHANGE THESE
export default SignUpForm;
export { EmailInput, RequiredInput, BirthdayInput, PasswordConfirmationInput };