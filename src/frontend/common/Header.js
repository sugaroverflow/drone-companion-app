import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeButton from '@material-ui/icons/Home';
import HelpButton from '@material-ui/icons/Help';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowBack from '@material-ui/icons/ArrowBack';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';

// import i18n from '../i18n';

const useStyles = makeStyles(theme => ({
  headBar: {
    padding: '0'
  },
  topHeadBar: {
    backgroundColor: '#FFFFFF'
  },
  languageSwitch: {
    color: '#0C0C0C !important'
  },
  lowerHeadBar: {
    backgroundColor: '#0C0C0C'
  },
  backButton: {
    color: '#FFFFFF'
  },
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
    <NavLink to="#" lang={i18n.language} onClick={changeLanguage} className={classes.languageSwitch}>
      {i18n.language === 'en' ? 'Français' : 'English'}
    </NavLink>
  );
  function BackButton() {
    if (backRoute) {
      return (
        <NavLink to={backRoute} className={classes.backButton}>
          <ArrowBack />
        </NavLink>

      );
    }
    return '';
  }

  return (
    <div className={classes.root}>

      <AppBar position="static" className={classes.headBar}>
        <Toolbar className={classes.topHeadBar}>
          <div style={{ width: '60%' }}>
            <img src={i18n.language === 'en' ? '/images/sig-blk-en.svg' : '/images/sig-blk-fr.svg'} className={classes.title} alt="" property="logo" />
          </div>
          <div style={{ textAlign: 'right', width: '40%' }}>
            <LanugageButton />
          </div>
        </Toolbar>
        <Toolbar className={classes.lowerHeadBar}>
          <IconButton
            aria-label="Back"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <BackButton />
          </IconButton>
          <Typography color="inherit" className={classes.title}>
            {title}
          </Typography>
          <IconButton
            aria-label="Help"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <NavLink to="/phases">
              <HomeButton />
            </NavLink>
          </IconButton>
          <IconButton
            aria-label="Help"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <HelpButton />
          </IconButton>
          <IconButton
            aria-label="Account"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
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
