import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from "prop-types";
const { SubtaskApi } = require('../../backend/api/siteSurveyAPI');


class SubtaskPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtasks: []
    };
  }

  componentDidMount() {
    this.setState({ subtasks: SubtaskApi.getAllSubtasks() });
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
            <tbody>{this.state.subtasks.map(CreateSubtaskRow, this)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

function CreateSubtaskRow(subtask) {
  return (
    <tr key={subtask.id}>
      <td>
        <NavLink to="SubTasksItemPage" params={{ id: subtask.id }}>
          {subtask.id}
        </NavLink>
      </td>
      <td>{subtask.titleEng}</td>
      <td>{subtask.descEng}</td>
    </tr>
  );
}

export default SubtaskPage;
