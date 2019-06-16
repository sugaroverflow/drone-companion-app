import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import Background from '../../../public/images/splash-background.png';
import GOCLogo from '../../../public/images/goc-logo-en.svg';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${Background})`,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Homepage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <img src={GOCLogo} alt="Symbol of the Government of Canada" className="logo" />
        </Toolbar>
      </AppBar>
      <main className="homepage">
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Grid container spacing={2}>
              <Grid item>
                <div className="droneRectangle" />
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <span className="titleInfo">
                    <h6 className="subtitle">DRONE SAFETY </h6>
                    <h4 className="title">KNOW BEFORE YOU GO!</h4>
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <div className="langSelection">
              <Grid container spacing={2} direction="column" alignItems="center">
                <Grid item>
                  <h5>Please select a language</h5>
                </Grid>
                <Grid item>
                  <h5>Sélectionnez votre langue</h5>
                </Grid>
              </Grid>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <NavLink className="btn btn-primary" to="/intro">
                    English
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink className="btn btn-primary" to="/intro">
                    Français
                  </NavLink>
                </Grid>
              </Grid>
            </div>
            <Grid container spacing={2}>
              <Grid item>
                <div className="droneRectangle" />
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <span className="titleInfo">
                    <h6 className="subtitle">SÉCURITÉ DES DRONES </h6>
                    <h4 className="title">RENSEIGNEZ-VOUS AVANT TOUT</h4>
                  </span>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
      {/* End footer */}
    </React.Fragment>
  );
}
