import React from 'react';
import { WithWizard } from 'react-albus';
import PropTypes from 'prop-types';

const StepNavigation = (props) => {
  const { nextButtonText, backButtonText } = props;
  return (
    <WithWizard
      render={({
        next, previous, step, steps
      }) => (
        <div className="example-buttons">

          {nextButtonText && steps.indexOf(step) < steps.length - 1 && (
          <button className="btn btn-primary" onClick={next} type="submit">
            {nextButtonText}
          </button>
          )}

          {backButtonText && steps.indexOf(step) > 0 && (
          <button className="btn btn-secondary" onClick={previous} type="submit">
            {backButtonText}
          </button>
          )}
        </div>
      )}
    />
  );
};

StepNavigation.propTypes = {
  nextButtonText: PropTypes.string,
  backButtonText: PropTypes.string
};

StepNavigation.defaultProps = {
  nextButtonText: null,
  backButtonText: null,
};
export default StepNavigation;
