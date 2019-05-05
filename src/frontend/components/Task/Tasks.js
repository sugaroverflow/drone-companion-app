import React, { Component } from 'react';
import TaskList from './TaskList';

export default class Tasks extends Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    fetch('/api/tasks')
      .then(res => res.json())
      .then((tasks) => {
        this.setState({ tasks });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { tasks } = this.state;
    return (
      <TaskList Tasks={tasks} />
    );
  }
}
