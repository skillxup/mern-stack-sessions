import React, { Component } from 'react';
import './FormValidation.css';
import { FormErrors } from './FormErrors';

class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '', 
      username: '', 
      emailaddress: '', 
      password: '', 
      mobilenumber: '', 
      url: '',
      
      formErrors: {
        fullname: '', 
        username: '', 
        emailaddress: '', 
        password: '', 
        mobilenumber: '', 
        url: ''
      }, 

      fullnameValid: false, 
      usernameValid: false, 
      emailaddressValid: false, 
      passwordValid: false, 
      mobilenumberValid: false, 
      urlValid: false, 

      formValid: false
    }
  };

  // handleUserInput
  handleUserInput = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    this.setState({[fieldName]: fieldValue}, 
      () => {this.validateField(fieldName, fieldValue)})
  };

  validateField(fieldName, fieldValue) {
    let fieldValidationErrors = this.state.formErrors;
    let fullnameValid = this.state.fullnameValid;
    let usernameValid = this.state.usernameValid;
    let emailaddressValid = this.state.emailaddressValid;
    let passwordValid = this.state.passwordValid;
    let mobilenumberValid = this.state.mobilenumberValid;
    let urlValid = this.state.urlValid;

    switch(fieldName) {
      case "fullname": 
        fullnameValid = fieldValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\s])[a-zA-Z\s]{4,}$/);
        fieldValidationErrors.fullname = fullnameValid ? '' : ' is invalid, should follow the criterai';
        break;

      case "username": 
        usernameValid = fieldValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[._])[a-zA-Z._]{6,}$/);
        fieldValidationErrors.username = usernameValid ? '' : ' make sure to enter correctly';
        break;

      case "emailaddress": 
        emailaddressValid = fieldValue.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
        fieldValidationErrors.emailaddress = emailaddressValid ? '' : ' is invalid format';
        break;

      case "password": 
        passwordValid = fieldValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[._])[a-zA-Z._]{6,9}$/);
        fieldValidationErrors.password = passwordValid ? '' : ' write correct';
        break;

      case "mobilenumber": 
        mobilenumberValid = fieldValue.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
        fieldValidationErrors.mobilenumber = mobilenumberValid ? '' : ' entered wrong format';
        break;

      case "url": 
        urlValid = fieldValue.match(/^(https|http?):\/\/+(www\.)?[a-z]{5,}\.[a-z]{3}$/);
        fieldValidationErrors.url = urlValid ? '' : ' is invalid';
        break;

      default: 
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors, 
      fullnameValid: fullnameValid, 
      usernameValid: usernameValid, 
      emailaddressValid: emailaddressValid, 
      passwordValid: passwordValid, 
      mobilenumberValid: mobilenumberValid, 
      urlValid: urlValid
    }, this.validateForm)
  };

  validateForm() {
    this.setState({
      formValid: this.state.fullnameValid && this.state.usernameValid && this.state.emailaddressValid && this.state.passwordValid && this.state.mobilenumberValid && this.state.urlValid
    })
  };

  render() {
    return(
      <div>
          <form>
            <h4>Form Validation</h4>

            <hr />

            <div className='row mb-3'>
              <div className='col-sm-6 offset-sm-3'>
                <FormErrors formErrors={this.state.formErrors} />
              </div>
            </div>

            <div className='row mb-3'>
              <label className='col-sm-4 text-end'> Full Name </label>
              <div className='col-sm-6'>
                <input type='text' name='fullname' value={this.state.fullname} className='form-control' placeholder='ex., john paul' onChange={this.handleUserInput} />
              </div>
            </div>

            <div className='row mb-3'>
              <label className='col-sm-4 text-end'> User Name </label>
              <div className='col-sm-6'>
                <input type='text' name='username' value={this.state.username} className='form-control' placeholder='ex., john_paul' onChange={this.handleUserInput} />
              </div>
            </div>

            <div className='row mb-3'>
              <label className='col-sm-4 text-end'> Email Address </label>
              <div className='col-sm-6'>
                <input type='text' name='emailaddress' value={this.state.emailaddress} className='form-control' placeholder='ex., john.paul234@gmail.com' onChange={this.handleUserInput} />
              </div>
            </div>

            <div className='row mb-3'>
              <label className='col-sm-4 text-end'> Password </label>
              <div className='col-sm-6'>
                <input type='text' name='password' value={this.state.password} className='form-control' placeholder='ex., j0hNp@ul' onChange={this.handleUserInput} />
              </div>
            </div>

            <div className='row mb-3'>
              <label className='col-sm-4 text-end'> Mobile Number </label>
              <div className='col-sm-6'>
                <input type='text' name='mobilenumber' value={this.state.mobilenumber} className='form-control' placeholder='ex., +(653) 432 7653' onChange={this.handleUserInput} />
              </div>
            </div>

            <div className='row mb-3'>
              <label className='col-sm-4 text-end'> Url </label>
              <div className='col-sm-6'>
                <input type='text' name='url' value={this.state.url} className='form-control' placeholder='ex., http://johnpaul.com' onChange={this.handleUserInput} />
              </div>
            </div>

            {/* <div className='row mb-3'>
              <label className='col-sm-4 text-end'> Gender </label>
              <div className='col-sm-6'>
                <div className='form-check'>
                  <div className='form-check-inline'>
                    <input type='radio' name='gender' value='male' checked /> male 
                  </div>
                  <div className='form-check-inline'>
                    <input type='radio' name='gender' value='female' /> female 
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className='row mb-3'>
              <label className='col-sm-4 text-end'> Hobbies </label>
              <div className='col-sm-6'>
                <div className='form-check'>
                  <div className='form-check-inline'>
                    <input type='checkbox' name='hobbies[]' value='riding' /> riding  
                  </div>
                  <div className='form-check-inline'>
                    <input type='checkbox' name='hobbies[]' value='skating' /> skating  
                  </div>
                  <div className='form-check-inline'>
                    <input type='checkbox' name='hobbies[]' value='other' /> other  
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className='row mb-3'>
              <label className='col-sm-4 text-end'> Description </label>
              <div className='col-sm-6'>
                <textarea name='description' className='form-control'>{this.state.description}</textarea>
              </div>
            </div> */}

            <div className='row mb-3'>
              <div className='col-sm-6 offset-sm-3'>
                <button type='submit' className='btn btn-primary' disabled={!this.state.formValid}> submit </button>
              </div>
            </div>

          </form>
      </div>
    );
  }
}

export default FormValidation;