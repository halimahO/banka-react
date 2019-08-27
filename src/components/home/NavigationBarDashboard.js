/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import navBarLogo from '../../img/logo-blue.png';
import menu from '../../img/menu.png';

class NavigationBarDashboard extends React.Component {
  constructor() {
    super();
    this.sidebar = React.createRef();
  }

  toggleSidebar = () => {
    const sidebar = this.sidebar.current;
    if (sidebar.style.display === 'none') {
      sidebar.style.display = 'block';
    } else {
      sidebar.style.display = 'none';
    }
  };

  render() {
    const lists = document.querySelectorAll('.menu-items li');
    const removeClass = () => {
      const activeMenu = document.querySelector(
        '.dashboard-area .items.active'
      );
      activeMenu.classList.remove('active');
    };

    const showCurrentMenu = menuId => {
      document.getElementById(menuId).classList.add('active');
    };

    Array.from(lists).forEach(listItem => {
      listItem.addEventListener('click', event => {
        const tartgetSectionId = event.target.dataset.menu;
        removeClass();
        showCurrentMenu(tartgetSectionId);
        document.getElementById(
          'menuTopic'
        ).innerHTML = tartgetSectionId.replace(/-/g, ' ');
      });
    });
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
                  <li>
                    <Link to="/create-account">Open an Account</Link>
                  </li>
                  <li>
                    <Link to="/">Log out</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-not-full">
              <div className="hidden-navbar">
                <img
                  id="menu"
                  className="nav-style menuToggle"
                  src={menu}
                  alt=""
                  onClick={this.toggleSidebar}
                />
                <div ref={this.sidebar} id="sidebar">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/dashboard">Profile</Link>
                    </li>
                    <li>
                      <Link to="/create-account">Open an Account</Link>
                    </li>
                    <div className="menu-items dashboard-menu">
                      <li
                        data-menu="account-history"
                        onClick={this.toggleSidebar}
                      >
                        Account History
                      </li>
                      {this.props.auth.user.type !== 'client' ? (
                        <React.Fragment>
                          <li
                            data-menu="debit-account"
                            onClick={this.toggleSidebar}
                          >
                            Debit Account
                          </li>
                          <li
                            data-menu="credit-account"
                            onClick={this.toggleSidebar}
                          >
                            Credit Account
                          </li>
                        </React.Fragment>
                      ) : null}
                    </div>
                    <li>
                      <Link to="/">Log out</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

NavigationBarDashboard.propTypes = {
  history: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  auth: PropTypes.object
};

export const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(NavigationBarDashboard);
