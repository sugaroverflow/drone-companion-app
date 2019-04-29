import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    <h1>Page Not Found</h1>
    <p>Whoops! Sorry, there is nothing to see here.</p>
    <p>
      <NavLink to="/">Back to Home</NavLink>
    </p>
  </div>
);

export default PageNotFound;
