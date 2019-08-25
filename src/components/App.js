/* eslint-disable react/prefer-stateless-function */
import '../css/styles.css';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import setupStore from '../store';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/LoginPage';
import SignUpPage from '../pages/Register';
import CreateAccountPage from '../pages/CreateAccount';
import ClientDashboard from '../pages/ClientDashboard';
import { setCurrentUser } from '../actions/auth.action';

const store = setupStore();
if (localStorage.user) {
  // get user object
  const user = JSON.parse(localStorage.user);
  // set current user
  store.dispatch(setCurrentUser(user));
}
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ToastContainer
            autoClose={3000}
            transition={Slide}
            position="top-center"
          />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/create-account" component={CreateAccountPage} />
            <Route path="/dashboard" component={ClientDashboard} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(App);
