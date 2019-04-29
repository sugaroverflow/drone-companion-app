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
    const phaseId = this.props.match.params.id;
    if (phaseId) {
      this.setState({
        phase: SiteSurveyApi.getPhaseById(phaseId),
        tasks: SiteSurveyApi.getAllTasksByPhaseID(phaseId)
      });
    }
  }

  render() {
    if (this.state.phase) {
      return (
        <div>
          <h1>
            <NavLink
              to={`/category/${this.state.phase.category_id}`}
              className="navbar-brand"
            >
              {`< Phase ${
                this.state.phase.OrderNum
              } - ${
                this.state.phase.titleEng}`}
            </NavLink>
          </h1>
          <div>
            {this.state.tasks.map(task => (
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
  match: PropTypes.object.isRequired
};

export default PhasePage;
