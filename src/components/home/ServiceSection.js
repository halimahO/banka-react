import React from 'react';

import mobileAppLogo from '../../img/New-Mobile-Banking-Product-Thumbnail-English.jpg';
import internetBankingLogo from '../../img/Internet-Banking.jpg';
import businessAdvisoryLogo from '../../img/BUSINESS-ADVISORY.jpg';

const ServiceSection = () => {
  return (
    <div>
      <div className="values">
        <h3 className="md-text">Our Services</h3>
        <div className="container">
          <div className="box">
            <img className="services-img" src={mobileAppLogo} alt="" />
            <div className="topic-block">
              <h4>Mobile Banking Services</h4>
            </div>
          </div>
          <div className="box">
            <img className="services-img" src={internetBankingLogo} alt="" />
            <div className="topic-block">
              <h4>Internet Banking Services</h4>
            </div>
          </div>
          <div className="box">
            <img className="services-img" src={businessAdvisoryLogo} alt="" />
            <div className="topic-block">
              <h4>Financial Advisory Services</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceSection;
