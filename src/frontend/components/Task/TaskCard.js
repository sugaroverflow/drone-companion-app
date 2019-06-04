import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@gctools-components/aurora-ds/css/aurora.min.css';

const TaskCard = ({ task, moduleId }) => (
  <div className="task-card">
    <div className="card-image-task">
      <img className="card-task-img" src={`/images/${task.bannerUrl}`} alt="Placeholder" />
    </div>
    <p className="card-text">
      {`${task.orderNum}. ${task.titleEng}`}
    </p>
    <p className="card-desc">
      {`${task.estimate} minutes read`}
    </p>
    <hr />
    <div className="card-footer">
      {/* @todo update hardcoded moduleId */}
      {/* @todo update hardcoded steps after progress functionality */}
      <NavLink className="btn btn-primary" to={`/modules/1/phases/${task.phase_id}/tasks/${task.task_id}/steps/1`}>
        Begin
      </NavLink>
    </div>
  </div>
);

TaskCard.propTypes = {
  task: PropTypes.shape({
    phase_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
  }).isRequired,
  moduleId: PropTypes.string.isRequired,
};
export default TaskCard;
