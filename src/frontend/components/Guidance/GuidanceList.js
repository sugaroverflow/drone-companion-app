import React from 'react';
import PropTypes, { object } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GuidanceCard from './GuidanceCard';

import Background from '../../../../public/images/burst-background.png';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  main: {
    backgroundImage: `url(${Background})`,
    // backgroundColor: theme.palette.background.paper,
  }
}));

export default function getGuidances(props) {
  const { guidances } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      {guidances.map(guidance => (
        <GuidanceCard
          key={guidance.orderNum}
          guidance={guidance}
        />
      ))}

    </React.Fragment>
  );
}

getGuidances.propTypes = {
  guidances: PropTypes.arrayOf(object).isRequired,
};
