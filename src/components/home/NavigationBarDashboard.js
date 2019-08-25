import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import navBarLogo from '../../img/logo-blue.png';
import menu from '../../img/menu.png';
import { logout } from '../../actions/auth.action';

class NavigationBarDashboard extends React.Component {
  handleLogOut = e => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
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
                  className="nav-style"
                  src={menu}
                  alt=""
                  onClick={toggleSidebar}
                />
                <div id="sidebar">
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
                      <li data-menu="account-history" onClick={toggleSidebar}>
                        Account History
                      </li>
                      {this.props.type !== 'client' ? (
                        <React.Fragment>
                          <li data-menu="debit-account" onClick={toggleSidebar}>
                            Debit Account
                          </li>
                          <li
                            data-menu="credit-account"
                            onClick={toggleSidebar}
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
export const mapStateToProps = state => {
  return {
    auth: state.auth,
    type: state.auth.user.type
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    logout: history => dispatch(logout(history))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBarDashboard);
