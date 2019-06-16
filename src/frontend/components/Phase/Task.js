import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Task = ({ task, phaseOId }) => (
  <li className="StepProgress-item">
    {' '}
    {task.titleEng}
    <NavLink
      className="btn btn-primary"
      to={`phases/${phaseOId}/tasks/${task.orderNum}/steps/`}
    >
     Begin Task
    </NavLink>
  </li>
);


Task.propTypes = {
  task: PropTypes.shape({
    titleEng: PropTypes.string.isRequired,
  }).isRequired,
  phaseOId: PropTypes.number.isRequired
};
export default Task;
