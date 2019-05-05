import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskList from './TaskList';

export default class Tasks extends Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { phaseId } = params;
    this.getTasks(phaseId);
  }

  // Retrieves the list of items from the Express app
  getTasks = (phaseId) => {
    fetch(`/api/tasks/${phaseId}`)
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  };

  render() {
    console.log(this.state);
    const { tasks } = this.state;
    return <TaskList tasks={tasks} />;
  }
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
