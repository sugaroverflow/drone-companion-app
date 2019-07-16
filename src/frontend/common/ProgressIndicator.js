import React from 'react';
import PropTypes from 'prop-types';

const ProgressIndicator = props => (
  <div aria-label="progress" className="step-indicator">
    <ul className="steps">
      <li className="complete">
Prepare
        <span className="sr-only">completed</span>
      </li>
      <li className="active" aria-current="true">Step-by-Step</li>
      <li>
Challenge
        <span className="sr-only">not completed</span>
      </li>
      <li>
Result
        <span className="sr-only">not completed</span>
      </li>
    </ul>
  </div>
);
export default ProgressIndicator;
