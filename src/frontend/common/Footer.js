import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faQuestionCircle, faCog, faUser
} from '@fortawesome/free-solid-svg-icons';
// import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles(theme => ({
  actionList: {
    backgroundColor: '#E8E8E8',
    textAlign: 'left',
    paddingLeft: '0',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  alignCenter: {
    textAlign: 'center'
  },
  bottomCaFlag: {
    width: '100%',
    textAlign: 'center'
  },
  width30: {
    width: '30%'
  },
  width50: {
    width: '50%'
  },
  width100: {
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
}));

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  return (
    <div className={classes.actionList}>
      <div>
        <ul>
          <li>
            <a href="/en/transparency/terms.html">Terms and conditions</a>
          </li>
          <li>
            <a href="/en/transparency/terms.html">Privacy</a>
          </li>
          <li>
            <a href="/en/transparency/terms.html">Submit feedback</a>
          </li>
        </ul>
      </div>
      <div className={classes.bottomCaFlag}>
        <object type="image/svg+xml" tabIndex="-1" role="img" data="/images/wmms-blk.svg" aria-label="Symbol of the Government of Canada" className={classes.width30} />
        <div className={classes.width100}>Version 1.0</div>
        <div className={classes.width100}>Alpha from the #DigitalDroneCollective</div>
      </div>
    </div>
  );
}
