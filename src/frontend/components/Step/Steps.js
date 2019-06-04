/* @todo: https://sketch.cloud/s/ng0Yl/a/Qvv39w
  Step:
    |_StepIndicator
    |_StepCard
*/
import React from 'react';

const alertStyle = {
  fontSize: '40px',
};

const Steps = () => (
  <div>
    <h1>Steps</h1>
    <div className="alert-icon alert-warning" role="alert">
      <div className="icon" aria-hidden="true">
        <i className="fas fa-exclamation-circle" style={alertStyle} />
      </div>
      <div className="message">
        <h2>Coming Soon!</h2>
        <p>Step + Guidance Cards will be available in the next sprint.</p>
      </div>
    </div>
  </div>
);

export default Steps;
