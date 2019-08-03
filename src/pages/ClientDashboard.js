/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import NavigationBar from '../components/home/NavigationBarDashboard';
import Footer from '../components/Footer';

import image from '../img/dashboard-img.png';

class Login extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container-dashboard shadow">
          <div className="dashboard">
            <div className="sidebar">
              <div className="head shadow">
                <img id="dashboard-menu-img" src={image} alt="" />
              </div>
              <div className="menu-items menu-body sidebar-li">
                <ul>
                  <li data-menu="profile">
                    <span className="fontAwesame">
                      <i
                        data-menu="profile"
                        className="fas fa-user menu-image"
                      />
                    </span>
                    <span data-menu="profile" className="menu-name">
                      PROFILE
                    </span>
                  </li>
                  <li data-menu="account-history">
                    <span className="fontAwesame">
                      <i
                        data-menu="account-history"
                        className="fas fa-file menu-image"
                      />
                    </span>
                    <span data-menu="account-history" className="menu-name">
                      ACCOUNT HISTORY
                    </span>
                  </li>
                  <li data-menu="transaction-history">
                    <span className="fontAwesame">
                      <i
                        data-menu="transaction-history"
                        className="fas fa-file-invoice menu-image"
                      />
                    </span>
                    <span data-menu="transaction-history" className="menu-name">
                      TRANSACTION
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="display-area">
              <div className="head">
                <p id="menuTopic" className="margin-left">
                  PROFILE
                </p>
              </div>
              <div className="dashboard-area">
                <div id="profile" className="items active">
                  <div className="user-profile">
                    <div className="pix shadow">
                      <span id="profile-pix">
                        <i className="fas fa-user" />
                      </span>
                      <h2 className="m1 md-text">Mercy Ekene</h2>
                      <h4 className="sm-text">mercyekene@gmail.com</h4>
                      <p className="top-border">Client</p>
                    </div>
                    <div className="profile-details shadow">
                      <div>Firstname:</div>
                      <div>Mercy</div>
                      <div>Lastname:</div>
                      <div>Ekene</div>
                      <div>Email:</div>
                      <div>mercyekene@gmail.com</div>
                      <div>Password:</div>
                      <div>**********</div>
                      <div>.</div>
                      <div>
                        <button type="submit" className="btn btn-reset">
                          Reset password
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="account-history"
                  className="items dashboard-area-background shadow"
                >
                  <div>
                    <div className="small-acct">
                      <div className="acct-display select-label">
                        <label>Account to display:</label>
                        <br />
                      </div>
                      <div className="acct-display">
                        <input
                          className="dashboard-input acct-number-width"
                          type="number"
                          placeholder="Account number here"
                        />
                      </div>
                      <div className="acct-display">
                        <button type="submit" className="btn btn-filter cursor">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <h4 className="m2 clear">Account: 0123456789</h4>
                  <div className="table-div">
                    <table>
                      <tr>
                        <th>Transaction Id</th>
                        <th>Transaction Date</th>
                        <th>Transaction type</th>
                        <th>Amount</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>21/2/2019</td>
                        <td>Debit</td>
                        <td>50,000</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>21/2/2019</td>
                        <td>Debit</td>
                        <td>50,000</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>21/2/2019</td>
                        <td>Credit</td>
                        <td>50,000</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>21/2/2019</td>
                        <td>Credit</td>
                        <td>50,000</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div
                  id="transaction-history"
                  className="items dashboard-area-background shadow"
                >
                  <div className="small-acct">
                    <div className="acct-display select-label">
                      <label>Transaction to display:</label>
                      <br />
                    </div>
                    <div className="acct-display">
                      <input
                        className="dashboard-input acct-number-width"
                        type="number"
                        placeholder="Transaction id here"
                      />
                    </div>
                    <div className="acct-display">
                      <button type="submit" className="btn btn-filter cursor">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="acct-summary-client shadow">
                      <h3 className="m2">Transaction Summary</h3>
                      <p>
                        <span className="b1">Account id:</span>1
                      </p>
                      <p>
                        <span className="b1">Created on:</span>
                        2019-03-03
                      </p>
                      <p>
                        <span className="b1">Type:</span>
                        Credit
                      </p>
                      <p>
                        <span className="b1">Account Number:</span>
                        0123456789
                      </p>
                      <p>
                        <span className="b1">Amount:</span>
                        10,000
                      </p>
                      <p>
                        <span className="b1">Old balance:</span>
                        #9,000.00
                      </p>
                      <p>
                        <span className="b1">New balance:</span>
                        #10,000.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Login;
