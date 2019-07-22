import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Task = ({
  task, phaseOId, currentTask, currentPhase
}) => {
  const isActive = (task.orderNum === currentTask) && (phaseOId === currentPhase);
  const isDone = (phaseOId < currentPhase)
  || ((phaseOId === currentPhase) && (task.orderNum < currentTask));

  if (isDone) {
    return (
      <li className="StepProgress-item is-done">
        <NavLink
          to={`/phases/${phaseOId}/tasks/${task.orderNum}/preQuiz/`}
        >
          {task.title}
        </NavLink>
      </li>
    );
  }
  if (isActive) {
    return (
      <li className="StepProgress-item current">

        {task.title}
        <NavLink
          className="btn btn-primary"
          to={`/phases/${phaseOId}/tasks/${task.orderNum}/preQuiz/`}
        >
          {('Start')}
        </NavLink>
      </li>
    );
  }
  return (
    <li className="StepProgress-item">
      {task.title}
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
