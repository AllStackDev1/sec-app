import React, { Component } from 'react';
import {
  Nav,
  Button,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Input,
  Badge
} from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeLocale = locale => {
    this.props.changeLocale(locale);
  };

  handleLogout = () => {
    this.props.logoutUser(this.props.history);
  };

  render() {
    return (
      <nav className="navbar fixed-top">
        <NavLink to="/" className="navbar-logo">
          <img src="/assets/img/sec.png" />
        </NavLink>

        <div className="ml-auto">
          <div className="header-icons d-inline-block align-middle">
            <div className="position-relative d-inline-block mr-2 mt-1">
              <UncontrolledDropdown className="dropdown-menu-right">
                <DropdownToggle className="header-icon notificationButton" color="empty">
                  <Badge color="danger">10</Badge>
                  <i className="material-icons">notifications</i>
                </DropdownToggle>
                <DropdownMenu
                  className="position-absolute mt-3 scroll"
                  right
                  id="notificationDropdown"
                >
                  {/* <PerfectScrollbar option={{ suppressScrollX: true, wheelPropagation: false }}>
                    {notifications.data.map((n, index) => {
                      return (
                        <div key={index} className="d-flex flex-row mb-3 pb-3 border-bottom">
                          <a href="/app">
                            <img
                              src={n.image}
                              alt="Notification"
                              className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                            />
                          </a>
                          <div className="pl-3 pr-2">
                            <a href="/app">
                              <p className="font-weight-medium mb-1">{n.message}</p>
                              <p className="text-muted mb-0 text-small">{n.date}</p>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </PerfectScrollbar> */}
                  <p>Hello</p>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
          <div className="user d-inline-block">
            <UncontrolledDropdown className="dropdown-menu-right">
              <DropdownToggle className="p-0" color="empty" caret>
                <span className="name mr-1">Paystack Company Limited</span>
                <span>
                  <img alt="Profile" src="/assets/img/paystack.png" />
                </span>
              </DropdownToggle>
              <DropdownMenu className="mt-3" right>
                <DropdownItem>Account</DropdownItem>
                <DropdownItem>Features</DropdownItem>
                <DropdownItem>Support</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => this.handleLogout()}>Sign out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </nav>
    );
  }
}

// const mapStateToProps = ({ menu, settings }) => {
//   const { containerClassnames, menuClickCount } = menu;
//   const { locale } = settings;

//   return { containerClassnames, menuClickCount,locale };
// };
export default TopNav;
// injectIntl(connect(
//   mapStateToProps,
//   { }
// )(TopNav));
