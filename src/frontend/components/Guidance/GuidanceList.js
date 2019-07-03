import React from 'react';
import PropTypes, { object } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GuidanceCard from './GuidanceCard';
import '@gctools-components/aurora-ds/css/aurora.min.css';
import Background from '../../../../public/images/burst-background.png';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
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
      {/* <main className={classes.main}> */}
      <div className={classes.heroContent}>
        <div className={classes.heroButtons}>
          {guidances.map(guidance => (
            <GuidanceCard
              key={guidance.orderNum}
              guidance={guidance}
            />
          ))}
        </div>
      </div>
      {/* </main> */}

    </React.Fragment>
  );
}

getGuidances.propTypes = {
  guidances: PropTypes.arrayOf(object).isRequired,
};
