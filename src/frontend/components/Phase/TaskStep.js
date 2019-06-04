

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const TaskStep = ({ task, moduleId }) => (
  <li className="StepProgress-item">
    {' '}
    {task.titleEng}
    <NavLink
      className="btn btn-primary"
      to={`/modules/${moduleId}/phases/${task.phase_id}/tasks/`}
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
  moduleId: PropTypes.string.isRequired
};
export default TaskStep;
