/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import NavigationBar from '../components/home/NavigationBarDashboard';
import Footer from '../components/Footer';
import createAccountAction from '../actions/create-account.action';

const options = [
  { value: 'savings', label: 'Savings' },
  { value: 'current', label: 'Current' }
];
class CreateAccountPage extends React.Component {
  state = {
    selectedAccountType: null
  };

  handleChange = selectedAccountType => {
    this.setState({ selectedAccountType });
  };

  handleSubmit = async e => {
    const { history } = this.props;
    e.preventDefault();
    try {
      const type = { type: this.state.selectedAccountType.value };
      await this.props.createAccountAction(type, history);
    } catch (error) {
      return toast.error('Account type is required');
    }
  };

  render() {
    const { selectedAccountType } = this.state;

    return (
      <div>
        <NavigationBar />
        <div id="login" className="padding-bot border shadow">
          <div>
            <h1 className="heading-title-login m2">OPEN AN ACCOUNT</h1>
          </div>
          <div className="form-div">
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>FULLNAME</label>
                <p>{`${this.props.firstname} ${this.props.lastname}`}</p>
              </div>
              <div>
                <label>ACCOUNT TYPE</label>
                <br />
                <br />
                <Select
                  value={selectedAccountType}
                  onChange={this.handleChange}
                  options={options}
                />
              </div>
              <button type="submit" className="btn">
                OPEN ACCOUNT
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
CreateAccountPage.propTypes = {
  history: PropTypes.object.isRequired,
  createAccountAction: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired
};

export const mapStateToProps = state => {
  return {
    firstname:
      state.userLogin.user.firstname || state.userSignup.user.firstname,
    lastname: state.userLogin.user.lastname || state.userSignup.user.lasttname
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    createAccountAction: async (userCredentials, history) => {
      return dispatch(await createAccountAction(userCredentials, history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccountPage);
