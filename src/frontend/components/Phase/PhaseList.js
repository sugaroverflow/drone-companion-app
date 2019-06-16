import React from 'react';
import PropTypes, { object } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import PhaseCard from './PhaseCard';

const getPhases = ({ phases }) => (
  <Grid container spacing={4}>
    {
      phases.map(phase => <PhaseCard key={phases.phase_id} phase={phase} />)
    }
  </Grid>
);

getPhases.propTypes = {
  phases: PropTypes.arrayOf(object).isRequired,
};

export default getPhases;
