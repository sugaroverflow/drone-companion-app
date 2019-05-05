import React from 'react';
import Grid from '@material-ui/core/Grid';
import PhaseCard from './PhaseCard';

const getPhases = phases => (
  <Grid container spacing={24}>
    {
    phases.modules.map(phase => <PhaseCard key={phase.phase_id} phase={phase} />)
    }
  </Grid>
);  

const PhaseList = phases => <div>{getPhases(phases)}</div>;

PhaseList.defaultProps = {
  phases: []
};

export default PhaseList;
