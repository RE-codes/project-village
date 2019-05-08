import React, { Component } from 'react';
import logo from '../images/logo.png';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="logo"
            height="40px"
            className="mr-2 rounded-circle"
          />
          <h4 className="text-light d-inline">Project Village</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <a className="nav-link" href="/">
                Feed <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Profile
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item" href="/">
                  View Profile
                </a>
                <a className="dropdown-item" href="/">
                  Edit Profile
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
