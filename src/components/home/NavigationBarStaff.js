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
          <div>
            <div className="nav-full">
              <div className="nav-style navbar">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="current">
                    <Link to="/dashboard">Profile</Link>
                  </li>
                  <li>
                    <Link to="/">Sign Out</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="nav-not-full">
              <div className="hidden-navbar">
                <img
                  id="menu"
                  className="nav-style"
                  src="./img/menu.png"
                  alt=""
                  onClick="toggleSidebar()"
                />
                <div id="sidebar">
                  <ul>
                    <li>
                        <a href="index.html">Home</a>
                      </li>
                    <li className="current">
                        <a href="dashboard.html">Profile</a>
                      </li>
                    <div className="menu-items dashboard-menu">
                        <li data-menu="debit-account" onClick="toggleSidebar()">
                        Debit Account
                      </li>
                        <li data-menu="credit-account" onClick="toggleSidebar()">
                        Credit Account
                      </li>
                        <li data-menu="view-an-account" onClick="toggleSidebar()">
                        View Account
                      </li>
                        <li
                        data-menu="view-all-accounts"
                        onClick="toggleSidebar()"
                      >
                        All Accounts
                      </li>
                        <li
                        data-menu="change-account-status"
                        onClick="toggleSidebar()"
                      >
                        Change Status
                      </li>
                        <li data-menu="delete-account" onClick="toggleSidebar()">
                        Delete Account
                      </li>
                      </div>
                    <li>
                        <a href="index.html">Sign Out</a>
                      </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavigationBar;
