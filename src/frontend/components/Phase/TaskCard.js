

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const TaskCard = ({ task }) => (
  <li className="StepProgress-item">
    {' '}
    {task.titleEng}
    <NavLink
      className="btn btn-primary"
      to={`/tasks/${task.task_id}`}
    >
     Begin Task
    </NavLink>
  </li>


);

TaskCard.propTypes = {
  task: PropTypes.shape({
    // phase_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    // titleFra: PropTypes.string.isRequired,
    // descEng: PropTypes.string.isRequired,
    // descFra: PropTypes.string.isRequired
  }).isRequired
};
export default TaskCard;
