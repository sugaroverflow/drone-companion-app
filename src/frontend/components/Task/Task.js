import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Task = ({
  task, phaseOId, currentTask, currentPhase
}) => {
  function StartButton({ isActive }) {
    if (isActive) {
      return (
        <NavLink
          className="btn btn-primary"
          to={`/phases/${phaseOId}/tasks/${task.orderNum}/preQuiz/`}
        >
          {('Start')}
        </NavLink>
      );
    }
    return '';
  }

  return (

    <li className="StepProgress-item">
      {' '}
      {task.title}
      <StartButton isActive={(task.orderNum === currentTask) && (phaseOId === currentPhase)} />

    </li>

  );
};


Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    orderNum: PropTypes.number.isRequired
  }).isRequired,
  phaseOId: PropTypes.number.isRequired,
  currentTask: PropTypes.number.isRequired,
  currentPhase: PropTypes.number.isRequired
};
export default Task;
