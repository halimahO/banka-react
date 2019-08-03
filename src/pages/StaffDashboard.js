/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import NavigationBar from '../components/home/NavigationBarStaff';
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
                  <li data-menu="debit-account">
                    <span className="fontAwesame">
                      <i
                        data-menu="debit-account"
                        className="fas fa-credit-card menu-image"
                      />
                    </span>
                    <span data-menu="debit-account" className="menu-name">
                      DEBIT ACCOUNT
                    </span>
                  </li>
                  <li data-menu="credit-account">
                    <span className="fontAwesame">
                      <i
                        data-menu="credit-account"
                        className="fas fa-credit-card menu-image"
                      />
                    </span>
                    <span data-menu="credit-account" className="menu-name">
                      CREDIT ACCOUNT
                    </span>
                  </li>
                  <li data-menu="view-an-account">
                    <span className="fontAwesame">
                      <i
                        data-menu="view-an-account"
                        className="far fa-eye menu-image"
                      />
                    </span>
                    <span data-menu="view-an-account" className="menu-name">
                      VIEW ACCOUNT
                    </span>
                  </li>
                  <li data-menu="view-all-accounts">
                    <span className="fontAwesame">
                      <i
                        data-menu="view-all-accounts"
                        className="fas fa-list menu-image"
                      />
                    </span>
                    <span data-menu="view-all-accounts" className="menu-name">
                      ALL ACCOUNTS
                    </span>
                  </li>

                  <li data-menu="change-account-status">
                    <span className="fontAwesame">
                      <i
                        data-menu="change-account-status"
                        className="fas fa-power-off menu-image"
                      />
                    </span>
                    <span
                      data-menu="change-account-status"
                      className="menu-name"
                    >
                      ACTIVATE ACCOUNT
                    </span>
                  </li>
                  <li data-menu="delete-account">
                    <span className="fontAwesame">
                      <i
                        data-menu="delete-account"
                        className="fas fa-trash-alt menu-image"
                      />
                    </span>
                    <span data-menu="delete-account" className="menu-name">
                      DELETE ACCOUNT
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
                      <p className="top-border">Staff</p>
                    </div>
                    <div className="profile-details shadow">
                      <div>Firstname: </div>
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
                  id="debit-account"
                  className="items dashboard-area-background shadow"
                >
                  <div className="small-acct">
                    <div className="acct-display select-label">
                      <label>Debit Account:</label>
                      <br />
                    </div>
                    <div className="acct-display">
                      <input
                        className="dashboard-input acct-number-width"
                        type="text"
                        placeholder="Account number"
                      />
                    </div>
                    <div className="acct-display">
                      <button type="submit" className="btn btn-filter cursor">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="acct-summary-client shadow">
                    <h4 className="m2">DEBIT THE ACCOUNT</h4>
                    <p>
                      <span className="b1">Account Name:</span>
                      Williams Ebuka
                    </p>
                    <p>
                      <span className="b1">Account Number:</span>
                      0123456789
                    </p>
                    <p>
                      <span className="b1">Account type:</span>
                      Current
                    </p>
                    <p>
                      <span className="b1">Status:</span>
                      Active
                    </p>
                    <p>
                      <span className="b1">Account balance:</span>
                      #2,000.00
                    </p>
                    <input
                      className="amountInput"
                      type="number"
                      placeholder="Amount..."
                    />
                    <button type="button" className="btn-small cursor">
                      DEBIT
                    </button>
                  </div>
                </div>
                <div
                  id="credit-account"
                  className="items dashboard-area-background shadow"
                >
                  <div className="small-acct">
                    <div className="acct-display select-label">
                      <label>Credit Account:</label>
                      <br />
                    </div>
                    <div className="acct-display">
                      <input
                        className="dashboard-input acct-number-width"
                        type="text"
                        placeholder="Account number"
                      />
                    </div>
                    <div className="acct-display">
                      <button type="button" className="btn btn-filter cursor">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="acct-summary-client shadow">
                    <h4 className="m2">CREDIT THE ACCOUNT</h4>
                    <p>
                      <span className="b1">Account Name:</span>
                      Williams Ebuka
                    </p>
                    <p>
                      <span className="b1">Account Number:</span>
                      0123456789
                    </p>
                    <p>
                      <span className="b1">Account type:</span>
                      Current
                    </p>
                    <p>
                      <span className="b1">Status:</span>
                      Active
                    </p>
                    <p>
                      <span className="b1">Account balance:</span>
                      #2,000.00
                    </p>
                    <input
                      className="amountInput"
                      type="number"
                      placeholder="Amount..."
                    />
                    <button type="button" className="btn-small cursor">
                      CREDIT
                    </button>
                  </div>
                </div>
                <div
                  id="view-an-account"
                  className="items dashboard-area-background shadow"
                >
                  <div className="small-acct">
                    <div className="acct-display select-label">
                      <label>Account to view:</label>
                      <br />
                    </div>
                    <div className="acct-display">
                      <input
                        className="dashboard-input acct-number-width"
                        type="text"
                        placeholder="Account number"
                      />
                    </div>
                    <div className="acct-display">
                      <button type="button" className="btn btn-filter cursor">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="acct-summary-client shadow">
                    <h4 className="m2">ACCOUNT DETAILS</h4>
                    <p>
                      {' '}
                      <span className="b1">Account Name:</span>
                      Lasisi George
                    </p>
                    <p>
                      <span className="b1">Account Number:</span>
                      0123456789
                    </p>
                    <p>
                      <span className="b1">Opening Date:</span>
                      21/3/2019
                    </p>
                    <p>
                      <span className="b1">Account type:</span>
                      Current
                    </p>
                    <p>
                      <span className="b1">Status:</span>
                      Dormant
                    </p>
                    <p>
                      <span className="b1">Account balance:</span>
                      #2,000.00
                    </p>
                  </div>
                </div>
                <div
                  id="view-all-accounts"
                  className="items dashboard-area-background shadow"
                >
                  <div className="small-acct">
                    <div className="acct-display select-label">
                      <label>Filter by email:</label>
                      <br />
                    </div>
                    <div className="acct-display">
                      <input
                        className="dashboard-input"
                        type="text"
                        placeholder="Email address here..."
                      />
                    </div>
                    <div className="acct-display select-label">
                      <label>Filter by status:</label>
                      <br />
                    </div>
                    <div className="acct-display">
                      <select className="statusSelect">
                        <option value="Savings">None</option>
                        <option value="Savings">Savings</option>
                        <option value="Current">Current</option>
                      </select>
                    </div>
                    <div className="acct-display">
                      {' '}
                      <button type="button" className="btn btn-filter cursor">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="acct-summary-client shadow">
                    <h4 className="m2">ALL BANK ACCOUNTS</h4>
                    <div className="table-div">
                      <table>
                        <tbody>
                          <tr>
                            <th>Account Name</th>
                            <th>Owner's Email</th>
                            <th>Account Type</th>
                            <th>Account Balance</th>
                            <th>Account Status</th>
                          </tr>
                          <tr>
                            <td>Halimah Oladosu</td>
                            <td>haleemaholadosu@gmail.com</td>
                            <td>Savings</td>
                            <td>50,000</td>
                            <td>Active</td>
                          </tr>
                          <tr>
                            <td>Halimah Oladosu</td>
                            <td>haleemaholadosu@gmail.com</td>
                            <td>Savings</td>
                            <td>50,000</td>
                            <td>Active</td>
                          </tr>
                          <tr>
                            <td>Halimah Oladosu</td>
                            <td>haleemaholadosu@gmail.com</td>
                            <td>Savings</td>
                            <td>50,000</td>
                            <td>Dormant</td>
                          </tr>
                          <tr>
                            <td>Halimah Oladosu</td>
                            <td>haleemaholadosu@gmail.com</td>
                            <td>Savings</td>
                            <td>50,000</td>
                            <td>Active</td>
                          </tr>
                          <tr>
                            <td>Halimah Oladosu</td>
                            <td>haleemaholadosu@gmail.com</td>
                            <td>Savings</td>
                            <td>50,000</td>
                            <td>Dormant</td>
                          </tr>
                          <tr>
                            <td>Halimah Oladosu</td>
                            <td>haleemaholadosu@gmail.com</td>
                            <td>Savings</td>
                            <td>50,000</td>
                            <td> Active</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  id="change-account-status"
                  className=" items dashboard-area-background shadow"
                >
                  <div className="small-acct">
                    <div className="acct-display select-label">
                      <label>Change Status:</label>
                      <br />
                    </div>
                    <div className="acct-display">
                      <input
                        className="dashboard-input acct-number-width"
                        type="text"
                        placeholder="Account number"
                      />
                    </div>
                    <div className="acct-display">
                      <button type="button" className="btn btn-filter cursor">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="acct-summary-client shadow">
                    <h4 className="m2">ACTIVATE/DEACTIVATE ACCOUNT</h4>
                    <p>
                      <span className="b1">Account Name:</span>
                      Lasisi George
                    </p>
                    <p>
                      <span className="b1">Account Number:</span>
                      0123456789
                    </p>
                    <p>
                      <span className="b1">Opening Date:</span>
                      21/3/2019
                    </p>
                    <p>
                      <span className="b1">Account type:</span>
                      Current
                    </p>
                    <p>
                      <span className="b1">Status:</span>
                      Dormant
                    </p>
                    <p>
                      <span className="b1">Account balance:</span>
                      #2,000.00
                    </p>
                    <button
                      type="button"
                      id="btn-act"
                      className="btn-small cursor"
                      onClick="toggleActiveDeactive()"
                    >
                      ACTIVATE
                    </button>
                  </div>
                </div>
                <div
                  id="delete-account"
                  className=" items dashboard-area-background shadow"
                >
                  <div className="small-acct">
                    <div className="acct-display select-label">
                      <label>Delete Account:</label>
                      <br />
                    </div>
                    <div className="acct-display">
                      <input
                        className="dashboard-input acct-number-width"
                        type="text"
                        placeholder="Account number"
                      />
                    </div>
                    <div className="acct-display">
                      <button type="button" className="btn btn-filter cursor">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="acct-summary-client shadow">
                    <h4 className="m2">ACCOUNT DETAILS</h4>
                    <p>
                      <span className="b1">Account Name:</span>
                      Lasisi George
                    </p>
                    <p>
                      <span className="b1">Account Number:</span>
                      0123456789
                    </p>
                    <p>
                      <span className="b1">Opening Date:</span>
                      21/3/2019
                    </p>
                    <p>
                      <span className="b1">Account type:</span>
                      Current
                    </p>
                    <p>
                      <span className="b1">Status:</span>
                      Dormant
                    </p>
                    <p>
                      <span className="b1">Account balance:</span>
                      #2,000.00
                    </p>
                    <button
                      type="button"
                      className="del-btn btn-small btn cursor"
                    >
                      Delete
                    </button>
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
