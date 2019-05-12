import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutCurrentUser } from '../../actions';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import logo from '../../images/logo.png';

class Header extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onLogoutClick = () => {
    this.props.logoutCurrentUser();
  };

  render() {
    return (
      <header>
        <Navbar className="" color="primary" dark expand="md">
          <NavbarBrand tag={Link} to="/">
            <img
              src={logo}
              alt="logo"
              height="35px"
              className="mr-2 rounded-circle"
            />
            Project Village
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/news-feed">
                  Village Feed
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/map" disabled>
                  My Village
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">
                  About
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Profile
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/profile">
                    View Profile
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/edit-profile">
                    Edit Profile
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} to="/" onClick={this.onLogoutClick}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default connect(
  null,
  { logoutCurrentUser }
)(Header);
