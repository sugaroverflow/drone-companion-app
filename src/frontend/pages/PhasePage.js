import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const { PhaseApi } = require('../../backend/api/siteSurveyAPI');
const { TaskApi } = require('../../backend/api/siteSurveyAPI');

class PhasePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phase: null,
      tasks: []
    };
  }

  componentWillMount() {
    const phaseId = this.props.match.params.id;
    if (phaseId) {
      this.setState({
        phase: PhaseApi.getPhaseById(phaseId),
        tasks: TaskApi.getAllTasksByPhaseID(phaseId)
      });
    }
  }

  // componentDidMount() {
  //   this.setState({ Phase: PhaseApi.getPhaseById() });
  // }
  render() {
    return (
      <div>
        <h1>
          <NavLink to="/task" className="navbar-brand">
            {`< Phase ${this.state.phase.OrderNum} - ${
              this.state.phase.titleEng
            }`}
          </NavLink>
        </h1>
        <div>{this.state.tasks.map(CreateTaskRow, this)}</div>
      </div>
    );
  }
}

function CreateTaskRow(task) {
  return (
    <div key={task.task_id}>
      <div className="card mb-2 d-inline-block">
        <div className="card-body">
          <p className="card-text">{task.titleEng}</p>
          <p className="card-text">
            <NavLink className="card-link" to={`/Task/${task.task_id}`}>
              VIEW
            </NavLink>
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

PhasePage.propTypes = {
  match: PropTypes.object.isRequired
};

export default PhasePage;
