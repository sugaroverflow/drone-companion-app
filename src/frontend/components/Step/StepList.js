import React from 'react';
import PropTypes, { object } from 'prop-types';
import StepCard from './StepCard';


export default function getSteps(props) {
  const {
    steps, currentStep, params, nextStep
  } = props;
  return (
    <React.Fragment>
      {steps.map(step => (
        <StepCard
          key={step.orderNum}
          params={params}
          currentStep={currentStep}
          step={step}
          nextStep={nextStep}
          totalSteps={steps.length}
        />
      ))}
    </React.Fragment>
  );
}

getSteps.propTypes = {
  steps: PropTypes.arrayOf(object).isRequired,
  params: PropTypes.shape({
    phaseOId: PropTypes.string.isRequired,
    taskOId: PropTypes.string.isRequired,
  }).isRequired,
  currentStep: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,

};
