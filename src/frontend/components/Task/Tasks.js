/* @todo: https://sketch.cloud/s/ng0Yl/a/KbYEay
  Tasks:
    |_Parent Phase Title
    |_Title Text: TaskList
    |_TaskList
      |_TaskCard
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskList from './TaskList';

export default class Tasks extends Component {
  constructor() {
    super();
    this.state = {
      phase: null
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { moduleOId } = match.params;
    const { phaseOId } = match.params;
    if (phaseOId && moduleOId) {
      this.getPhasebyId(moduleOId, phaseOId);
    }
  }

  getPhasebyId = (moduleOId, phaseOId) => {
    fetch(`/api/modules/${moduleOId}/phases/${phaseOId}`)
      .then(res => res.json())
      .then((phase) => {
        this.setState({ phase });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { phase } = this.state;
    const { match } = this.props;
    const { moduleOId } = match.params;
    if (phase !== null) {
      const { tasks } = phase;
      return (
        <div>
          <DisplayPhaseInfo phase={phase} />
          {(tasks) ? <TaskList tasks={tasks} moduleOId={moduleOId} phaseOId={phase.orderNum} /> : ''}
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

Tasks.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseId: null
    })
  })
};

Tasks.propTypes = {
  // @todo fix the issue with match and props here
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseOId: PropTypes.string.isRequired,
      moduleOId: PropTypes.string.isRequired
    })
  })
};

DisplayPhaseInfo.propTypes = {
  phase: PropTypes.shape(
    {
      phase_id: PropTypes.number.isRequired,
      titleEng: PropTypes.string.isRequired,
      orderNum: PropTypes.number.isRequired,
    }
  ).isRequired
};
