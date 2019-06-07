import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@gctools-components/aurora-ds/css/aurora.min.css';

const TaskCard = (props) => {
  const { task, params } = props;
  return (
    <div className="task-card">
      <div className="card-image-task">
        <img className="card-task-img" src={`/images/${task.imageUrlEng}`} alt="Placeholder" />
      </div>
      <p className="card-text">
        {`${task.orderNum}. ${task.titleEng}`}
      </p>
      <p className="card-desc">
        {`${task.estimate} minutes read`}
      </p>
      <hr />
      <div className="card-footer">
        <NavLink className="btn btn-primary" to={`/modules/${params.moduleOId}/phases/${params.phaseOId}/tasks/${task.task_id}/steps/`}>
        Begin
        </NavLink>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    phase_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
  }).isRequired,
  params: PropTypes.shape({
    moduleOId: PropTypes.string.isRequired,
    phaseOId: PropTypes.string.isRequired,
  }).isRequired
};
export default TaskCard;
