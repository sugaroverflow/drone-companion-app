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
import { useTranslation } from 'react-i18next';

import '@gctools-components/aurora-ds/css/aurora.min.css';

const StepCard = (props) => {
  const {
    step, currentStep, params, nextStep, totalSteps
  } = props;

  const { t } = useTranslation('step');

  if (currentStep !== step.orderNum) { // Prop: The current step
    return null;
  }

  const nextButton = () => {
    // If the current step is not 3, then render the "next" button
    if (currentStep < totalSteps) {
      return (
        <div>
          <NavLink className="btn btn-primary" to={`/phases/${params.phaseOId}/tasks/${params.taskOId}/steps/${Number.parseInt(step.orderNum, 10) + 1}`} onClick={nextStep}>
            {t('Next Step')}
          </NavLink>
        </div>
      );
    }
    // else button to the summary page
    // @todo: update this to make it more robust
    return (
      <NavLink className="btn btn-primary" to={`/phases/${params.phaseOId}/tasks/${params.taskOId}/summary`}>
        {t('Next')}
      </NavLink>
    );
  };

  return (
    <div className="task-card">
      {t('Step of', { currentStep, totalSteps })}
      <h3 className="card-title h5">
        {step.title}
      </h3>
      <div className="card-image-step">
        <img className="card-step-img" src={`/images/${step.imageUrl}`} alt="Placeholder" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: step.description }} />
      <hr />
      <div className="card-footer">
        {nextButton()}
        <p>
          <NavLink className="btn btn-secondary" to={`/phases/${params.phaseOId}/tasks/${params.taskOId}/steps/${step.orderNum}/guidances/`}>
            {t('How?')}
          </NavLink>
        </p>
      </div>
    </div>
  );
};

StepCard.propTypes = {
  step: PropTypes.shape({
    title: PropTypes.string.isRequired,
    orderNum: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
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
