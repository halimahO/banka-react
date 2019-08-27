/* eslint-disable react/jsx-key */
import React from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../components/home/NavigationBarDashboard';
import Footer from '../components/Footer';
import userTransactionAction from '../actions/user-account-action';
import { debit, credit } from '../actions/transaction.action';
import image from '../img/dashboard-img.png';
import PropTypes from 'prop-types';

export class ClientDashboard extends React.Component {
  state = {
    accountNo: '',
    amount: 0
  };

  componentDidMount() {
    const lists = document.querySelectorAll('.menu-items li');
    const removeClass = () => {
      const activeMenu = document.querySelector(
        '.dashboard-area .items.active'
      );
      activeMenu.classList.remove('active');
    };

    const showCurrentMenu = menuId => {
      document.getElementById(menuId).classList.add('active');
    };

    // this.props.fetchUserAccounts(this.props.auth.email);

    Array.from(lists).forEach(listItem => {
      listItem.addEventListener('click', event => {
        const tartgetSectionId = event.target.dataset.menu;
        removeClass();
        showCurrentMenu(tartgetSectionId);
        document.getElementById(
          'menuTopic'
        ).innerHTML = tartgetSectionId.replace(/-/g, ' ');
      });
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDebit = async e => {
    e.preventDefault();
    const amount = { amount: parseFloat(this.state.amount) };
    await this.props.debit(this.state.accountNo, amount);
  };

  handleCredit = async e => {
    e.preventDefault();
    const amount = { amount: parseFloat(this.state.amount) };
    await this.props.credit(this.state.accountNo, amount);
  };

  handleTransactions = async e => {
    e.preventDefault();
    await this.props.UserTransaction(this.state.accountNo);
  };

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
                  {this.props.auth.type !== 'client' ? (
                    <React.Fragment>
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
                    </React.Fragment>
                  ) : null}
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
                      <h2 className="m1 md-text">{`${this.props.auth.firstname} ${this.props.auth.lastname}`}</h2>
                      <h4 className="sm-text">{this.props.auth.email}</h4>
                      <p className="top-border">{this.props.auth.type}</p>
                    </div>
                    <div className="profile-details shadow">
                      <div>Firstname:</div>
                      <div>{this.props.auth.firstname}</div>
                      <div>Lastname:</div>
                      <div>{this.props.auth.lastname}</div>
                      <div>Email:</div>
                      <div>{this.props.auth.email}</div>
                      <div>Password:</div>
                      <div>**********</div>
                      <div>Account Number:</div>
                      <div>
                        {Object.keys(this.props.newAccount).length > 0
                          ? this.props.newAccount.account.accountNumber
                          : ''}
                      </div>
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
                        <label htmlFor="accountNo">Account to display:</label>
                        <br />
                      </div>
                      <div className="acct-display">
                        <input
                          className="dashboard-input acct-number-width"
                          name="accountNo"
                          type="number"
                          id="accountNo"
                          onChange={this.handleChange}
                          placeholder="Account number here"
                        />
                      </div>
                      <div className="acct-display">
                        <button
                          type="submit"
                          className="btn btn-filter cursor"
                          onClick={this.handleTransactions}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <h4 className="m2 clear">
                    Account:
                    {this.state.accountNo}
                  </h4>
                  <div className="table-div">
                    <table>
                      <thead>
                        <tr>
                          <th>Transaction Id</th>
                          <th>Transaction Date</th>
                          <th>Transaction type</th>
                          <th>Amount</th>
                          <th>Old Balance</th>
                          <th>New Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.userTransactions.map(transaction => {
                          return (
                            <tr key={transaction.id}>
                              <td>{transaction.id}</td>
                              <td>{transaction.createdon}</td>
                              <td>{transaction.type}</td>
                              <td>{transaction.amount}</td>
                              <td>{transaction.oldbalance}</td>
                              <td>{transaction.newbalance}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  id="debit-account"
                  className="items dashboard-area-background shadow"
                >
                  <div className="small-acct">
                    <div className="acct-display select-label">
                      <label htmlFor="accountNo">Debit Account:</label>
                      <br />
                    </div>
                    <div className="acct-display">
                      <input
                        className="dashboard-input acct-number-width"
                        name="accountNo"
                        type="number"
                        onChange={this.handleChange}
                        placeholder="Account number"
                      />
                    </div>
                  </div>
                  <div className="acct-summary-client shadow">
                    <h4 className="m2">DEBIT THE ACCOUNT</h4>
                    <input
                      className="amountInput"
                      type="number"
                      name="amount"
                      onChange={this.handleChange}
                      placeholder="Amount..."
                    />
                    <button
                      id="handleDebit"
                      type="submit"
                      className="btn-small cursor"
                      onClick={this.handleDebit}
                    >
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
                      <label htmlFor="accountNo">Credit Account:</label>
                      <br />
                    </div>
                    <div className="acct-display">
                      <input
                        className="dashboard-input acct-number-width"
                        type="text"
                        name="accountNo"
                        onChange={this.handleChange}
                        placeholder="Account number"
                      />
                    </div>
                  </div>
                  <div className="acct-summary-client shadow">
                    <h4 className="m2">CREDIT THE ACCOUNT</h4>
                    <input
                      className="amountInput"
                      type="number"
                      name="amount"
                      onChange={this.handleChange}
                      placeholder="Amount..."
                    />
                    <button
                      type="submit"
                      className="btn-small cursor"
                      onClick={this.handleCredit}
                    >
                      CREDIT
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

ClientDashboard.propTypes = {
  auth: PropTypes.object,
  fetchUserAccounts: PropTypes.func,
  UserTransaction: PropTypes.func,
  debit: PropTypes.func,
  credit: PropTypes.func,
  userTransactions: PropTypes.any,
  accountNumber: PropTypes.number,
  newAccount: PropTypes.object
};
export const mapStateToProps = state => {
  return {
    auth: state.auth.user,
    userTransactions: state.userTransactions,
    newAccount: state.newAccount
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    UserTransaction: accountNo => dispatch(userTransactionAction(accountNo)),
    debit: (accountNo, amount) => dispatch(debit(accountNo, amount)),
    credit: (accountNo, amount) => dispatch(credit(accountNo, amount))
    // fetchUserAccounts: emailAddress => dispatch(fetchUserAccounts(emailAddress))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientDashboard);
