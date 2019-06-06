

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
    // phase_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    // titleFra: PropTypes.string.isRequired,
    // descEng: PropTypes.string.isRequired,
    // descFra: PropTypes.string.isRequired
  }).isRequired,
  moduleOId: PropTypes.number.isRequired,
  phaseOId: PropTypes.number.isRequired
};
export default TaskStep;
