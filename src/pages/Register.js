/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigationBar from '../components/home/NavigationBarLogin';
import Footer from '../components/Footer';
import signupAction from '../actions/signup.action';

class Register extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    firstnameError: '',
    lastnameError: '',
    passwordError: ''
  };

  handleChange = e => {
    this.setState({
      firstnameError: '',
      lastnameError: '',
      passwordError: '',
      emailError: ''
    });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let firstnameError = '';
    let lastnameError = '';
    let passwordError = '';
    let emailError = '';
    const { firstname, lastname, password, email } = this.state;
    if (firstname.length < 2 || !firstname.match(/^[A-Za-z]+$/)) {
      firstnameError = 'Firstname must be characters and not less than 2';
    }
    if (lastname.length < 2 || !lastname.match(/^[A-Za-z]+$/)) {
      lastnameError = 'Lastname must be characters and not less than 2';
    }
    if (password.length < 6 || !password.match(/^[a-zA-Z0-9_-]*$/)) {
      passwordError =
        'Password cannot be less than 6 and can only contain letters, numbers, underscores and dashes';
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      emailError = 'Email must be a valid email';
    }
    if (firstnameError || lastnameError || passwordError || emailError) {
      this.setState({
        firstnameError,
        lastnameError,
        passwordError,
        emailError
      });
      return false;
    }
    return true;
  };

  handleSubmit = async e => {
    const { history } = this.props;
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      await this.props.signupAction(this.state, history);
      this.setState({ firstnameError: '' });
    }
  };

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="login-section padding-bot border shadow">
          <div>
            <h1 className="heading-title-login">REGISTER</h1>
            <p className="center">
              Already have an account?
              <a href="sign-in.html">Sign in</a>
            </p>
          </div>
          <div className="form-div">
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>FIRSTNAME</label>
                <br />
                <span>{this.state.firstnameError}</span>
                <input
                  type="text"
                  placeholder="Firstname"
                  name="firstname"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label>LASTNAME</label>
                <br />
                <span>{this.state.lastnameError}</span>
                <input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label>EMAIL ADDRESS</label>
                <br />
                <span>{this.state.emailError}</span>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label>
                  <p id="password-label" type="password">
                    PASSWORD
                  </p>
                </label>
                <span>{this.state.passwordError}</span>
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  placeholder="*******"
                  required
                />
              </div>
              <button type="submit" location="dashboard.html" className="btn">
                REGISTER
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

Register.propTypes = {
  history: PropTypes.object.isRequired,
  signupAction: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    signupAction: async (userCredentials, history) => {
      return dispatch(await signupAction(userCredentials, history));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
