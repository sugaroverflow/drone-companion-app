import React from 'react';
import Grid from '@material-ui/core/Grid';
import TaskItem from './Task';

const getTasks = tasks => (
  <Grid container spacing={24}>
    {tasks.tasks.map(task => (
      <TaskItem key={task.task_id} task={task} />
    ))}
  </Grid>
);

const TaskList = tasks => <div>{getTasks(tasks)}</div>;

TaskList.defaultProps = {
  tasks: []
};

export default TaskList;
