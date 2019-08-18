import React from 'react';
import { Link } from 'react-router-dom';
import navBarLogo from '../../img/logo-blue.png';

const NavigationBar = () => {
  return (
    <div className="shadow">
      <div className="container">
        <div id="branding">
          <Link to="/">
            <img className="branding" src={navBarLogo} alt="logo-blue" />
          </Link>
        </div>
        <nav>
          <div className="nav-full">
            <div className="nav-style navbar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard">Profile</Link>
                </li>
                <li className="current">
                  <Link to="/create-account">Open an Account</Link>
                </li>
                <li>
                  <Link to="/">Sign Out</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-not-full">
            <div className="hidden-navbar">
              {/* <img
                id="menu"
                className="nav-style"
                src="./img/menu.png"
                alt=""
                onclick="toggleSidebar()"
              /> */}
              <div id="sidebar">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Profile</Link>
                  </li>
                  <li className="current">
                    <Link to="/create-account">Open an Account</Link>
                  </li>
                  <li>
                    <Link to="/">Sign Out</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavigationBar;
