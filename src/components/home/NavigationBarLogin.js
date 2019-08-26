/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import navBarLogo from '../../img/logo-blue.png';
import menu from '../../img/menu.png';

const NavigationBar = () => {
  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'none') {
      sidebar.style.display = 'block';
    } else {
      sidebar.style.display = 'none';
    }
  };
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
                <li className="current">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Sign in</Link>
                </li>
                <li>
                  <Link to="/signup">Register</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-not-full">
            <div className="hidden-navbar">
              <img
                id="menu"
                className="nav-style"
                src={menu}
                alt=""
                onClick={toggleSidebar}
              />
              <div id="sidebar">
                <ul>
                  <li className="current">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/login">Sign in</Link>
                  </li>
                  <li>
                    <Link to="/signup">Register</Link>
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
