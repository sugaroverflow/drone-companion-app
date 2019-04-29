import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SubtaskCard from './SubtaskCard';

const { SiteSurveyApi } = require('../../backend/api/siteSurveyAPI');

class TaskPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: null,
      subtasks: []
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({
      task: SiteSurveyApi.getTaskById(id),
      subtasks: SiteSurveyApi.getSubtasksByTaskId(id)
    });
  }

  render() {
    const { task, subtasks } = this.state;
    if (task) {
      return (
        <div>
          <h1>
            <NavLink
              to={`/phase/${task.phase_id}`}
              className="navbar-brand"
            >
              {`< ${task.titleEng}`}
            </NavLink>
          </h1>
          <div>
            {subtasks.map(subtask => (
              <SubtaskCard key={subtask.subtask_id} subtask={subtask} />
            ))}
          </div>
        </div>
      );
    }
    return <div>No item found!</div>;
  }
}

TaskPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired,
  }).isRequired
};

export default TaskPage;
