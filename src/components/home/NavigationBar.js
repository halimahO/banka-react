/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import navBarLogo from '../../img/logo-blue.png';
import menu from '../../img/menu.png';
import { logout } from '../../actions/auth.action';

class NavigationBar extends React.Component {
  constructor() {
    super();
    this.sidebar = React.createRef();
  }

  handleLogOut = e => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  };

  toggleSidebar = () => {
    const sidebar = this.sidebar.current;
    if (sidebar.style.display === 'none') {
      sidebar.style.display = 'block';
    } else {
      sidebar.style.display = 'none';
    }
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
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

                {isAuthenticated === false ? (
                  <React.Fragment>
                    <li>
                      <Link to="/login">Sign in</Link>
                    </li>
                    <li>
                      <Link to="/signup">Register</Link>
                    </li>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <li>
                      <Link to="/dashboard">Profile</Link>
                    </li>
                    <li id="logout" onClick={this.handleLogOut}>
                      <Link to="/">Log out</Link>
                    </li>
                  </React.Fragment>
                )}
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
                onClick={this.toggleSidebar}
              />
              <div ref={this.sidebar} id="sidebar">
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
    );
  }
}

NavigationBar.propTypes = {
  logout: PropTypes.func,
  history: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  auth: PropTypes.object
};

export const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(NavigationBar);
