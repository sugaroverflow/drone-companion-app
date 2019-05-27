import React from 'react';
import PropTypes from 'prop-types';

const Guidance = ({ guidance }) => (
  <div>
    <p className="card-text">{guidance.titleEng}</p>
  </div>
);

Guidance.propTypes = {
  guidance: PropTypes.shape.isRequired
};
export default Guidance;
