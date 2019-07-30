/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

class App extends React.Component {
  render() {
    return (
      <h1>
        <LandingPage />
      </h1>
    );
  }
}

export default hot(module)(App);
