import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@gctools-components/aurora-ds/css/aurora.min.css';

const StepCard = (props) => {
  const { step, params } = props;
  return (
    <div className="task-card">
      <h3 className="card-title h5">
        {step.titleEng}
      </h3>
      <div className="card-image-step">
        <img className="card-step-img" src={`/images/${step.imageUrlEng}`} alt="Placeholder" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: step.descEng }} />
      <hr />
      <div className="card-footer">
        <NavLink className="btn btn-secondary" to={`/modules/${params.moduleOId}/phases/${params.phaseOId}/tasks/${params.taskOId}/steps/${step.step_id}`}>
        Next Step
        </NavLink>
        <p>
          <NavLink className="btn btn-secondary" to={`/modules/${params.moduleOId}/phases/${params.phaseOId}/tasks/${params.taskOId}/steps/${step.step_id}/guidances/`}>
        How?
          </NavLink>
        </p>
      </div>
    </div>
  );
};

StepCard.propTypes = {
  step: PropTypes.shape({
    step_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired
  }).isRequired,
  params: PropTypes.shape({
    moduleOId: PropTypes.string.isRequired,
    phaseOId: PropTypes.string.isRequired,
    taskOId: PropTypes.string.isRequired
  }).isRequired
};
export default StepCard;
