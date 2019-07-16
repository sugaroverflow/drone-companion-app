import React from 'react';
import PropTypes, { object } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import PhaseCard from './PhaseCard';
import Background from '../../../../public/images/burst-background.png';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  main: {
    backgroundImage: `url(${Background})`
    // backgroundColor: theme.palette.background.paper,
  }
}));

export default function getPhases(props) {
  const { phases } = props;
  return (
    <React.Fragment>
      {phases.map(phase => (
        <PhaseCard key={phase.orderNum} phase={phase} />
      ))}
    </React.Fragment>
  );
}

getPhases.propTypes = {
  phases: PropTypes.arrayOf(object).isRequired
};
