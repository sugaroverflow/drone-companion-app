import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Task = ({ task, phaseOId }) => (

  <li className="StepProgress-item">
    {' '}
    {task.title}
    <NavLink
      className="btn btn-primary"
      to={`/phases/${phaseOId}/tasks/${task.orderNum}/preQuiz/`}
    >
      {('Start')}
    </NavLink>
  </li>
);


Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    orderNum: PropTypes.number.isRequired
  }).isRequired,
  phaseOId: PropTypes.number.isRequired
};
export default Task;
