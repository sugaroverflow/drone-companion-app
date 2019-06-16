import React from 'react';
import PropTypes, { object } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import StepCard from './StepCard';

const getSteps = (props) => {
  const {
    steps, currentStep, params, nextStep
  } = props;
  return (
    <Grid container spacing={24}>
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
    </Grid>
  );
};
getSteps.propTypes = {
  steps: PropTypes.arrayOf(object).isRequired,
  params: PropTypes.shape({
    moduleOId: PropTypes.string.isRequired,
    phaseOId: PropTypes.string.isRequired,
    taskOId: PropTypes.string.isRequired,
  }).isRequired,
  currentStep: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,

};

export default getSteps;
