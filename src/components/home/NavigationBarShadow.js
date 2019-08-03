import React from 'react';
import navBarLogo from '../../img/logo-blue.png';

const NavigationBar = () => {
  return (
    <div className="shadow">
      <div className="container">
        <div id="branding">
          <a href="index.html">
            <img className="branding" src={navBarLogo} alt="logo-blue" />
          </a>
        </div>
        <nav>
          <div className="nav-full">
            <div className="nav-style navbar">
              <ul>
                <li className="current">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="sign-in.html">Sign in</a>
                </li>
                <li>
                  <a href="register.html">Register</a>
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
                  <li className="current">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="sign-in.html">Sign in</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
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
