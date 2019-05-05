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

const PhaseCard = ({ phase }) => (
  <Grid item xs={4}>
    <div className="phase-card card mb-2 d-inline-block">
      <h3 className="card-title h5">{phase.titleEng}</h3>
      <div className="card-body">
        <img className="card-img-top" src={phase.bannerUrl} alt="Placeholder" />
        <h3 className="card-title h5">Introduction</h3>
        <p className="card-text">{phase.descEng}</p>
      </div>
      <div className="card-footer">
        <button type="button" className="btn btn-primary">
          { /* @todo create proper NavLink */ }
          <NavLink className="card-link" to={`/tasks/${phase.module_id}`}>
            Begin Phase
          </NavLink>
        </button>
      </div>
    </div>
  </Grid>
);

PhaseCard.propTypes = {
  phase: PropTypes.shape({
    module_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
    descEng: PropTypes.string.isRequired,
    descFra: PropTypes.string.isRequired,
  }).isRequired
};
export default withStyles(styles)(PhaseCard);
