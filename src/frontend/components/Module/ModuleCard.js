import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles, } from '@material-ui/core';
import '@gctools-components/aurora-ds/css/aurora.min.css';
// import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    maxWidth: '18rem',
  },
};

const ModuleCard = ({ module }) => (
  // <Grid item xs={4}>
  <div className="module-card">
    <h2 className="h6">{module.titleEng}</h2>
    <div className="card-image-task">
      <img className="card-task-img" src={module.bannerUrl} alt="Placeholder" />

    </div>
    <p className="card-text">{module.descEng}</p>
    { /* @todo create proper NavLink */ }
    <div className="card-footer">
      <NavLink className="btn btn-primary" to={`/phases/${module.module_id}`}>
            Begin Module
      </NavLink>
    </div>
  </div>
  // </Grid>
);

ModuleCard.propTypes = {
  module: PropTypes.shape({
    module_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
    descEng: PropTypes.string.isRequired,
    descFra: PropTypes.string.isRequired,
  }).isRequired
};

export default withStyles(styles)(ModuleCard);
