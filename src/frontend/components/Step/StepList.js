import React from 'react';
import PropTypes, { object } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import StepCard from './StepCard';
import '@gctools-components/aurora-ds/css/aurora.min.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
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

export default function getSteps(props) {
  const {
    steps, currentStep, params, nextStep
  } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="Step by Step" />
      <main className={classes.main}>
        <div className={classes.heroContent}>
          <div className={classes.heroButtons}>
            {steps.map(step => (
              <StepCard
                key={step.orderNum}
                params={params}
                currentStep={currentStep}
                step={step}
                nextStep={nextStep}
                totalSteps={steps.length}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

getSteps.propTypes = {
  steps: PropTypes.arrayOf(object).isRequired,
  params: PropTypes.shape({
    phaseOId: PropTypes.string.isRequired,
    taskOId: PropTypes.string.isRequired,
  }).isRequired,
  currentStep: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,

};
