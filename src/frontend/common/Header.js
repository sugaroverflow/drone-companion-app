import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';

// import i18n from '../i18n';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function HeaderAppBar(props) {
  const classes = useStyles();
  const {
    title, backRoute, changeLanguage, i18n
  } = props;
  const LanugageButton = () => (
    <a lang={i18n.language} className="btn" onClick={changeLanguage}>
      {i18n.language === 'en' ? 'Français' : 'English'}
    </a>
  );
  function BackButton() {
    if (backRoute) {
      return (
        <NavLink to={backRoute}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </NavLink>
      );
    }
    return '';
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={1}>
              <BackButton />
            </Grid>
            <Grid item xs={8}>
              <h6>{title}</h6>
            </Grid>
            <Grid item xs={1}>
              <FontAwesomeIcon icon={faUserCircle} />
            </Grid>
            <Grid item xs={2}>
              <LanugageButton />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeaderAppBar.propTypes = {
  title: PropTypes.string.isRequired,
  i18n: PropTypes.shape({
    language: PropTypes.string.isRequired
  }).isRequired,
  changeLanguage: PropTypes.func.isRequired,
  backRoute: PropTypes.string.isRequired
};
