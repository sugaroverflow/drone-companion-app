import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles, } from '@material-ui/core';
import '@gctools-components/aurora-ds/css/aurora.min.css';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    maxWidth: '18rem',
  },
};

const ModuleCard = ({ module }) => (
  <Grid item xs={4}>
    <div className="module-card card mb-2 d-inline-block">
      <div className="card-body">
        <h3 className="card-title h5">{module.titleEng}</h3>
        <img className="card-img-top" src={module.bannerUrl} alt="Placeholder" />
        <div className="card-subtitle text-muted">Introduction</div>
        <p className="card-text">{module.descEng}</p>
      </div>
      <div className="card-footer">
        <button type="button" className="btn btn-primary">
          { /* @todo create proper NavLink */ }
          <NavLink className="card-link" to={`/api/phases/${module.module_id}`}>
            Begin Module
          </NavLink>
        </button>
      </div>
    </div>
  </Grid>
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
