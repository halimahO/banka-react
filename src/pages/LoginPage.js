import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigationBar from '../components/home/NavigationBarLogin';
import Footer from '../components/Footer';
import loginAction from '../actions/login.action';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    const { history } = this.props;
    e.preventDefault();
    await this.props.loginAction(this.state, history);
  };

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="login-section padding-bot border shadow">
          <div>
            <h1 className="heading-title-login">SIGN IN</h1>
            <p className="center">
              Not registered with us yet?
              <a href="register.html">Sign up</a>
            </p>
          </div>
          <div className="form-div">
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="emailInput">EMAIL ADDRESS</label>
                <br />
                <input
                  id="emailInput"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">
                  <p id="password-label">PASSWORD </p>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="*******"
                  required
                  onChange={this.handleChange}
                />
                <a href="#1">
                  <p id="forgot-password-ptag">Forgot your password?</p>
                </a>
              </div>
              <button type="submit" id="loginButton" className="btn">
                SIGN IN
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.object.isRequired,
  loginAction: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    loginAction: async (userCredentials, history) => {
      return dispatch(await loginAction(userCredentials, history));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
