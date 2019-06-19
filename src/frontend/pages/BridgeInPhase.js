import React from 'react';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '@gctools-components/aurora-ds/css/aurora.min.css';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

export default function BridgeInPhase() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="Introduction" />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <h4>DronesEd</h4>
            <h2>Conducting Site Surveys</h2>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <NavLink className="btn btn-primary" to="/phases/">
                    Go to Phases
                  </NavLink>
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
