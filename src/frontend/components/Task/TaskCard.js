import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const styles = {
  // card: {
  //   maxWidth: '18rem'
  // }
};

const TaskCard = ({ task }) => (
  // <Grid item xs={4}>

  <div className="task-card">
    <h2 className="h6">{task.titleEng}</h2>
    <div className="card-image-task">
      <img className="card-task-img" src={task.bannerUrl} alt="Placeholder" />
    </div>
    <p className="card-text">{task.descEng}</p>
    {/* @todo create proper NavLink */}
    <div className="card-footer">
      <NavLink className="btn btn-primary" to={`/Steps/${task.task_id}`}>
        Begin Task
      </NavLink>
    </div>
  </div>
  // </Grid>
);

TaskCard.propTypes = {
  task: PropTypes.shape({
    phase_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
    descEng: PropTypes.string.isRequired,
    descFra: PropTypes.string.isRequired
  }).isRequired
};
export default withStyles(styles)(TaskCard);
