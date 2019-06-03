import React from 'react';
import PropTypes, { object } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TaskCard from './TaskCard';

const getTasks = ({ tasks }) => (
  <Grid container spacing={24}>
    {tasks.map(task => (
      <TaskCard key={task.task_id} task={task} />
    ))}
  </Grid>
);
getTasks.propTypes = {
  tasks: PropTypes.arrayOf(object).isRequired
};

export default getTasks;
