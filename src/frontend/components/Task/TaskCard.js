import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@gctools-components/aurora-ds/css/aurora.min.css';

const TaskCard = ({ task }) => (
  <div className="task-card">
    <div className="card-image-task">
      <img className="card-task-img" src={`/images/${task.bannerUrl}`} alt="Placeholder" />
    </div>
    <p className="card-text">
      {`${task.orderNum}. ${task.titleEng}`}
    </p>
    <p className="card-desp">
      {`${task.estimate} minutes read`}
    </p>
    <hr />
    <div className="card-footer">
      <NavLink className="btn btn-primary" to={`/steps/${task.task_id}`}>
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
  }).isRequired
};
export default TaskCard;
