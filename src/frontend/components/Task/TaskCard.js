import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const TaskCard = ({ task }) => (
  <div className="task-card">
    <h2 className="h6">{task.titleEng}</h2>
    <div className="card-image-task">
      <img className="card-task-img" src={task.bannerUrl} alt="Placeholder" />
    </div>
    <p className="card-text">{task.descEng}</p>
    <div className="card-footer">
      <NavLink className="btn btn-primary" to={`/Steps/${task.task_id}`}>
        Begin Task
      </NavLink>
    </div>
  </div>
);

TaskCard.propTypes = {
  task: PropTypes.shape({
    phase_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
    descEng: PropTypes.string.isRequired,
    descFra: PropTypes.string.isRequired
  }).isRequired
};
export default TaskCard;
