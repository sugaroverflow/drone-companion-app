import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import withHeaderFooter from '../common/withHeaderFooter';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}));

function BridgeInPhase(props) {
  const { t } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <h1>{t('Conducting Site Surveys')}</h1>
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
    </React.Fragment>
  );
}

BridgeInPhase.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('home')(
  withHeaderFooter(BridgeInPhase, 'Conducting Site Surveys')
);
