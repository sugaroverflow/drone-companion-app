import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import TaskCard from './TaskCard';

const { SiteSurveyApi } = require('../../backend/api/siteSurveyAPI');

class PhasePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phase: null,
      tasks: []
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    if (id) {
      this.setState({
        phase: SiteSurveyApi.getPhaseById(id),
        tasks: SiteSurveyApi.getAllTasksByPhaseID(id)
      });
    }
  }

  render() {
    const { phase, tasks } = this.state;
    if (phase) {
      return (
        <div>
          <h1>
            <NavLink
              to={`/category/${phase.category_id}`}
              className="navbar-brand"
            >
              {`< Phase ${
                phase.OrderNum
              } - ${
                phase.titleEng}`}
            </NavLink>
          </h1>
          <div>
            {tasks.map(task => (
              <TaskCard key={task.task_id} task={task} />
            ))}
          </div>
        </div>
      );
    }
    return <div>No item found!</div>;
  }
}

PhasePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired,
  }).isRequired
};

export default PhasePage;
