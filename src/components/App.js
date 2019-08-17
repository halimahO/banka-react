/* eslint-disable react/prefer-stateless-function */
import '../css/styles.css';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setupStore from '../store';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/LoginPage';

const store = setupStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(App);
