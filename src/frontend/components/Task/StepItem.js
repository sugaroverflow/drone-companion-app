import React from 'react';
import PropTypes from 'prop-types';

const Step = ({ step }) => (
  <div>
    <p className="card-text">{step.titleEng}</p>
  </div>
);

Step.propTypes = {
  step: PropTypes.shape.isRequired
};
export default Step;
