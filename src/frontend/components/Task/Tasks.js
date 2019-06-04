/* Todo: https://sketch.cloud/s/ng0Yl/a/KbYEay
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
      phase: null,
      tasks: []
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { phaseId } = params;
    this.getPhasebyId(phaseId);
    this.getTasks(phaseId);
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

  // Retrieves the list of items from the Express app
  getTasks = (phaseId) => {
    fetch(`/api/tasks?phase_id=${phaseId}`)
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  };

  render() {
    const { tasks, phase } = this.state;
    return (
      <div>
        <DisplayPhaseInfo module={phase} />
        <TaskList tasks={tasks} />
      </div>
    );
  }
}

function DisplayPhaseInfo({ phase }) {
  if (phase !== null) {
    return (
      <div>
        <h1>
          {`Phase ${phase.orderNum}:`}
          {phase.titleEng}
        </h1>
        <h2>
          {'Task List'}
        </h2>
      </div>
    );
  }
  return '';
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
      phaseId: PropTypes.string.isRequired
    })
  })
};
