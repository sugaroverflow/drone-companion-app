import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskList from '../Task/TaskList';

export default class Phases extends Component {
  constructor() {
    super();
    this.state = {
      phase: null
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { phaseId } = match.params;
    if (phaseId) {
      this.getPhasebyId(phaseId);
    }
  }

  getPhasebyId = (phaseId) => {
    fetch(`/api/phases/${phaseId}`)
      .then(res => res.json())
      .then((phases) => {
        this.setState({ phase: phases[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { phase } = this.state;
    if (phase !== null) {
      const { tasks } = phase;
      return (
        <div>
          <DisplayPhaseInfo phase={phase} />
          {(tasks) ? <TaskList tasks={tasks} /> : ''}
        </div>
      );
    }
    return '';
  }
}

function DisplayPhaseInfo({ phase }) {
  return (
    <div>
      <h1 className="h6">
        {`Phase ${phase.orderNum}: ${phase.titleEng}`}
      </h1>
      <h2 className="h2">
        {'Task List'}
      </h2>
    </div>
  );
}

Phases.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseId: null
    })
  })
};

Phases.propTypes = {
  // @todo fix the issue with match and props here
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseId: PropTypes.string.isRequired
    })
  })
};

DisplayPhaseInfo.propTypes = {
  phase: PropTypes.shape(
    {
      phase_id: PropTypes.string.isRequired,
      titleEng: PropTypes.string.isRequired,
      orderNum: PropTypes.string.isRequired,
    }
  ).isRequired
};
