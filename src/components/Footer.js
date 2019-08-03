import React from 'react';

import twitterIcon from '../img/twitter.png';
import instagramIcon from '../img/instagram.png';
import facebookIcon from '../img/fb.png';

const Footer = () => {
  return (
    <div className="footer">
      <h3>Follow Us</h3>
      <div className="social">
        <div className="socialmedia-img inline-style">
          <a href="https://facebook.com/">
            <img src={facebookIcon} alt="facebook" />
          </a>
        </div>
        <div className="socialmedia-img inline-style">
          <a href="https://twitter.com/">
            <img src={twitterIcon} alt="twitter" />
          </a>
        </div>
        <div className="socialmedia-img inline-style">
          <a href="https://instagram.com/">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
      <p>Banka, copyright © 2019</p>
    </div>
  );
};
export default Footer;
