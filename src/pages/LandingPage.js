/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import NavigationBar from '../components/home/NavigationBar';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>AppName</div>
          <div>
            <NavigationBar />
          </div>
        </div>
        <div>
          <div>AppName</div>
          <div>AppDesciption</div>
          <div>getStarted</div>
        </div>
        <div>
          <div>oursevices</div>
          <div>images</div>
        </div>
        <div>
          <div>social text</div>
          <div>social</div>
          <div>copyright</div>
        </div>
      </div>
    );
  }
}
export default LandingPage;
