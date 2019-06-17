import React from 'react';
import PropTypes, { object } from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '@gctools-components/aurora-ds/css/aurora.min.css';
import PhaseCard from './PhaseCard';
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

export default function getPhases({ phases }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="Home" />
      <main className={classes.main}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <h4>Skill #1: Site Survey</h4>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  {
                    phases.map(phase => <PhaseCard key={phases.orderNum} phase={phase} />)
                  }
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

getPhases.propTypes = {
  phases: PropTypes.arrayOf(object).isRequired,
};
