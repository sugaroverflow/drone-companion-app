/* Todo: https://sketch.cloud/s/ng0Yl/a/Qvv39w
  Step:
    |_Step order number: Step title
    |_Step image
    |_Step description text
    |_Next button
    |_How? - Link to guidance
*/
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@gctools-components/aurora-ds/css/aurora.min.css';

const StepCard = (props) => {
  const {
    step, currentStep, params, nextStep, totalSteps
  } = props;

  if (currentStep !== step.orderNum) { // Prop: The current step
    return null;
  }

  const nextButton = () => {
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <div>
          <NavLink className="btn btn-primary" to={`/phases/${params.phaseOId}/tasks/${params.taskOId}/steps/${Number.parseInt(step.orderNum, 10) + 1}`} onClick={nextStep}>
        Next Step
          </NavLink>
        </div>
      );
    }
    // else button to the summary page
    // @todo: update this to make it more robust
    return (
      <NavLink className="btn btn-primary" to={`/phases/${params.phaseOId}/tasks/${params.taskOId}/summary`}>
        Next
      </NavLink>
    );
  };

  return (
    <div className="task-card">
      {`Step ${currentStep} of ${totalSteps}:`}
      <h3 className="card-title h5">
        {step.titleEng}
      </h3>
      <div className="card-image-step">
        <img className="card-step-img" src={`/images/${step.imageUrlEng}`} alt="Placeholder" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: step.descEng }} />
      <hr />
      <div className="card-footer">
        {nextButton()}
        <p>
          <NavLink className="btn btn-secondary" to={`/phases/${params.phaseOId}/tasks/${params.taskOId}/steps/${step.stepId}/guidances/`}>
        How?
          </NavLink>
        </p>
      </div>
    </div>
  );
};

StepCard.propTypes = {
  step: PropTypes.shape({
    stepId: PropTypes.number.isRequired,
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
  }).isRequired,
  params: PropTypes.shape({
    phaseOId: PropTypes.string.isRequired,
    taskOId: PropTypes.string.isRequired,
  }).isRequired,
  currentStep: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  totalSteps: PropTypes.number.isRequired,
};
export default StepCard;
