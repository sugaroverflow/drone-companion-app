import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const TaskStep = ({ task, phaseOId }) => (
  <li className="StepProgress-item">
    {' '}
    {task.titleEng}
    <NavLink
      className="btn btn-primary"
      to={`phases/${phaseOId}/tasks/`}
    >
     Begin Task
    </NavLink>
  </li>
);


TaskStep.propTypes = {
  task: PropTypes.shape({
    titleEng: PropTypes.string.isRequired,
  }).isRequired,
  phaseOId: PropTypes.number.isRequired
};
export default TaskStep;
