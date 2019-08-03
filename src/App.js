/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { hot } from 'react-hot-loader';
import LandingPage from './pages/LandingPage';
import './css/styles.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <LandingPage />
      </div>
    );
  }
}

export default hot(module)(App);
