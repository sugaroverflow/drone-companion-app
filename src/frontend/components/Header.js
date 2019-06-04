/* @todo update the links to match the backend routes */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="fixed-top bg-white shadow-sm" role="banner">
    <div>
      <div>
        <img
          src="data:image/png;base64,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"
          alt="Government of Canada"
        />
      </div>
    </div>
    <div>
      <nav
        aria-label="Main Navigation"
        role="navigation"
        className="main-nav navbar navbar-expand bg-white"
      >
        <a className="text-dark logo" href="/#!">
          <span className="h2 d-none d-md-block float-left font-weight-normal">
            Drone Companion
          </span>
        </a>
        <div className="navbar-collapse nav-holder">
          <ul className="mx-auto nav-site scroll nav nav-tabs">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
