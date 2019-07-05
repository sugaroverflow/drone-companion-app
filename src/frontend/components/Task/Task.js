import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Task = ({ task, phaseOId }) => {
  const {t, i18n}=useTranslation('phase');
  console.log(i18n.language);
  return (
  
  <li className="StepProgress-item">
    {' '}
    {task.title}
    <NavLink
      className="btn btn-primary"
      to={`/phases/${phaseOId}/tasks/${task.orderNum}/preQuiz/`}
    >
     {t('Start')}
    </NavLink>
  </li>
  );
  }


Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  phaseOId: PropTypes.number.isRequired
};
export default Task;
