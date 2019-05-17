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

const PhaseCard = ({ phase }) => (
  // <Grid item xs={4}>

  <div className="task-card">
    <h2 className="h6">{phase.titleEng}</h2>
    <div className="card-image-task">
      <img className="card-task-img" src={phase.bannerUrl} alt="Placeholder" />
    </div>
    <p className="card-text">{phase.descEng}</p>
    {/* @todo create proper NavLink */}
    <div className="card-footer">
      <NavLink className="btn btn-primary" to={`/Tasks/${phase.phase_id}`}>
        Begin Phase
      </NavLink>
    </div>
  </div>
  // </Grid>
);

PhaseCard.propTypes = {
  phase: PropTypes.shape({
    module_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
    descEng: PropTypes.string.isRequired,
    descFra: PropTypes.string.isRequired
  }).isRequired
};
export default withStyles(styles)(PhaseCard);
