import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';


const Task = ({ task }) => (
  <Grid item xs={4}>
    <div className="card mb-2 d-inline-block">
      <div className="card-body">
        <p className="card-text">{task.titleEng}</p>
      </div>
    </div>
  </Grid>
);

Task.propTypes = {
  task: PropTypes.shape.isRequired
};
export default Task;
