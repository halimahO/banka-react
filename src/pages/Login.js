/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import NavigationBar from '../components/home/NavigationBarLogin';
import Footer from '../components/Footer';

class Login extends React.Component {
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
            <form onSubmit="return goToDashboard()">
              <div>
                <label>EMAIL ADDRESS</label>
                <br />
                <input
                  id="emailInput"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div>
                <label>
                  {' '}
                  <p id="password-label">PASSWORD </p>
                </label>
                <input type="password" placeholder="*******" required />
                <a href>
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
export default Login;
