/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import NavigationBarShadow from '../components/home/NavigationBarShadow';
import Footer from '../components/Footer';

class Register extends React.Component {
  render() {
    return (
      <div>
        <NavigationBarShadow />
        <div className="login-section padding-bot border shadow">
          <div>
            <h1 className="heading-title-login">REGISTER</h1>
            <p className="center">
              Already have an account?
              <a href="sign-in.html">Sign in</a>
            </p>
          </div>
          <div className="form-div">
            <form>
              <div>
                <label>FIRSTNAME</label>
                <br />
                <input type="text" placeholder="Firstname" required />
              </div>
              <div>
                <label>LASTNAME</label>
                <br />
                <input type="text" placeholder="Lastname" required />
              </div>
              <div>
                <label>EMAIL ADDRESS</label>
                <br />
                <input type="email" placeholder="Email Address" required />
              </div>
              <div>
                <label>
                  <p id="password-label">PASSWORD </p>
                </label>
                <input type="password" placeholder="*******" required />
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
export default Register;
