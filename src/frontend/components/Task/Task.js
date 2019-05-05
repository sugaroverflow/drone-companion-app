import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task }) => (
  <div>
    <p className="card-text">{task.titleEng}</p>
  </div>
);

Task.propTypes = {
  task: PropTypes.shape.isRequired
};
export default Task;
