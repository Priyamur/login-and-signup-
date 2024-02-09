import React, { Component } from 'react';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      passwordError: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validate = () => {
    let firstNameError = '';
    let lastNameError = '';
    let emailError = '';
    let passwordError = '';

    // Validate first name
    if (!this.state.firstName.trim()) {
      firstNameError = 'First name is required';
    }

    // Validate last name
    if (!this.state.lastName.trim()) {
      lastNameError = 'Last name is required';
    }

    // Validate email
    if (!this.state.email.includes('@')) {
      emailError = 'Invalid email address';
    }

    // Validate password
    if (this.state.password.length < 6) {
      passwordError = 'Password must be at least 6 characters long';
    }

    if (firstNameError || lastNameError || emailError || passwordError) {
      this.setState({ firstNameError, lastNameError, emailError, passwordError });
      return false;
    }

    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      // Proceed with form submission
      console.log('Valid form submitted');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: 'red' }}>{this.state.firstNameError}</div>
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: 'red' }}>{this.state.lastNameError}</div>
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: 'red' }}>{this.state.emailError}</div>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: 'red' }}>{this.state.passwordError}</div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
}
