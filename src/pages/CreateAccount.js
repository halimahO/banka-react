/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import NavigationBar from '../components/home/NavigationBarDashboard';
import Footer from '../components/Footer';

class Login extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div id="login" className="padding-bot border shadow">
          <div>
            <h1 className="heading-title-login m2">OPEN AN ACCOUNT</h1>
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
                <label>ACCOUNT TYPE</label>

                <br />
                <select>
                  <option value="Savings">Savings</option>
                  <option value="Current">Current</option>
                </select>
              </div>
              <button type="submit" className="btn">
                <a href="#l">SUBMIT</a>
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
