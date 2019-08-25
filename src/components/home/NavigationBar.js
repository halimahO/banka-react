import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import navBarLogo from '../../img/logo-blue.png';
import menu from '../../img/menu.png';
import { logout } from '../../actions/auth.action';

class NavigationBar extends React.Component {
  handleLogOut = e => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const toggleSidebar = () => {
      const sidebar = document.getElementById('sidebar');
      if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
      } else {
        sidebar.style.display = 'none';
      }
    };

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
                    <li>
                      <Link onClick={this.handleLogOut} to="/">
                        Log out
                      </Link>
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
    );
  }
}

NavigationBar.propTypes = {
  logout: PropTypes.func,
  history: PropTypes.object
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
