// @todo: Create a breadcrumb component.
import React from 'react';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';

const Breadcrumb = () => (
  <div>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#test">First Page</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#test">Second Page</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
      Current Page
        </li>
      </ol>
    </nav>
  </div>
);
export default Breadcrumb;
