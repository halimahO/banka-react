/* eslint-disable react/prefer-stateless-function */
// import '../styles.css';
import React from 'react';
import NavigationBar from '../components/home/NavigationBar';
import HeroSection from '../components/home/HeroSection';
import ServiceSection from '../components/home/ServiceSection';
import Footer from '../components/Footer';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <HeroSection />
        <ServiceSection />
        <Footer />
      </div>
    );
  }
}
export default LandingPage;
