import React from 'react';
import Task from './Task';

const getTasks = tasks => (
  <div>
    {
    tasks.tasks.map(task => <Task key={task.task_id} phase={task} />)
    }
  </div>
);

const TaskList = tasks => <div>{getTasks(tasks)}</div>;

TaskList.defaultProps = {
  phases: []
};

export default TaskList;
