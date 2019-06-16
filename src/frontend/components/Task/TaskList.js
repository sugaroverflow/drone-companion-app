import React from 'react';
import PropTypes, { object } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TaskCard from './TaskCard';

const getTasks = (props) => {
  const { tasks, params } = props;
  return (
    <Grid container spacing={10}>
      {tasks.map(task => (
        <TaskCard key={task.task_id} task={task} params={params} />
      ))}
    </Grid>
  );
};
getTasks.propTypes = {
  tasks: PropTypes.arrayOf(object).isRequired,
  params: PropTypes.shape({
    phaseOId: PropTypes.string.isRequired,
  }).isRequired

};

export default getTasks;
