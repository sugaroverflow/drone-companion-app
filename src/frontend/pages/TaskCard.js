import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const { SiteSurveyApi } = require('../../backend/api/siteSurveyAPI');

function TaskCard(props) {
  const { task } = props;
  return (
    <div key={task.task_id}>
      <div className="card mb-2 d-inline-block">
        <div className="card-body">
          <p className="card-text">{task.titleEng}</p>
          <p className="card-text">
            <NavLink className="card-link" to={`/Task/${task.task_id}`}>
              {SiteSurveyApi.getSubtasksByTaskId(task.task_id).length}
              {' '}
            Subtasks
            </NavLink>
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}
TaskCard.propTypes = {
  task: PropTypes.object.isRequired
};
export default TaskCard;
