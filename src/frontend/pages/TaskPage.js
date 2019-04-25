import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from "prop-types";
const { TaskApi } = require('../../backend/api/siteSurveyAPI');

class TaskPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    this.setState({ categories: TaskApi.getAllChecklistitems() });
  }

  render() {
    return (
      <div>
        <h1>Categories</h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>{this.state.tasks.map(CreateTaskRow, this)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

function CreateTaskRow(task) {
  return (
    <tr key={task.id}>
      <td>
        <NavLink to="TasksPage" params={{ id: task.id }}>
          {task.id}
        </NavLink>
      </td>
      <td>{task.titleEng}</td>
      <td>{task.descEng}</td>
    </tr>
  );
}

export default TaskPage;
