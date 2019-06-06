import React from 'react';
import PropTypes, { object } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TaskCard from './TaskCard';

const getTasks = ({ tasks, moduleOId, phaseOId }) => (
  <Grid container spacing={24}>
    {tasks.map(task => (
      <TaskCard key={task.task_id} task={task} moduleOId={moduleOId} phaseOId={phaseOId} />
    ))}
  </Grid>
);
getTasks.propTypes = {
  tasks: PropTypes.arrayOf(object).isRequired,
  moduleOId: PropTypes.string.isRequired,
  phaseOId: PropTypes.number.isRequired,
};

export default getTasks;
