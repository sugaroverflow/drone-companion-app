

import React from 'react';
import PropTypes from 'prop-types';


const TaskStep = ({ task }) => (
  <li className="StepProgress-item">
    {' '}
    {task.titleEng}
  </li>
);


TaskStep.propTypes = {
  task: PropTypes.shape({
    // phase_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    // titleFra: PropTypes.string.isRequired,
    // descEng: PropTypes.string.isRequired,
    // descFra: PropTypes.string.isRequired
  }).isRequired
};
export default TaskStep;
