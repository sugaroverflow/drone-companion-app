

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const TaskStep = ({ task, moduleOId, phaseOId }) => (
  <li className="StepProgress-item">
    {' '}
    {task.titleEng}
    <NavLink
      className="btn btn-primary"
      to={`/modules/${moduleOId}/phases/${phaseOId}/tasks/`}
    >
     Begin Task
    </NavLink>
  </li>
);


TaskStep.propTypes = {
  task: PropTypes.shape({
    titleEng: PropTypes.string.isRequired,
  }).isRequired,
  moduleOId: PropTypes.number.isRequired,
  phaseOId: PropTypes.number.isRequired
};
export default TaskStep;
