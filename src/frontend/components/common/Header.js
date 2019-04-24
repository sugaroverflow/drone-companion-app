/* @todo update the links to match the backend routes */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // const activeStyle = { color: "#F15B2A" };
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img alt="logo" src="../../images/placeholder.png" />
        </NavLink>
        <ul className="nav navbar-nav">
          <li className="breadcrumb-item">
            <NavLink to="/" className="navbar-brand">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/sitesurvey" className="navbar-brand">
              Site Survey
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-brand">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
