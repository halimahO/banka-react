/* eslint-disable react/prefer-stateless-function */
import '../css/styles.css';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import setupStore from '../store';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

const store = setupStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <LandingPage />
        </div>
      </Provider>
    );
  }
}

export default hot(module)(App);
