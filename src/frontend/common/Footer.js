import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
  const classes = useStyles();

  return (
    <div className={classes.actionList}>
      <div className="brand">
        <div className="container">
          <div className="row">
            <nav className="col-md-10 ftr-urlt-lnk">
              <h2 className="wb-inv">About this site</h2>
              <ul>


                <li><a href="/social.html">Social media</a></li>


                <li><a href="/mobile.html">Mobile applications</a></li>


                <li><a href="/government/about.html">About Canada.ca</a></li>


                <li><a href="/transparency/terms.html">Terms and conditions</a></li>


                <li><a href="/privacy">Privacy</a></li>


              </ul>
            </nav>
            <div className="col-xs-6 col-md-2 text-right">
              <object type="image/svg+xml" tabIndex="-1" role="img" data="/etc/designs/canada/wet-boew/assets/wmms-blk.svg" aria-label="Symbol of the Government of Canada" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bottomCaFlag}>
        <object type="image/svg+xml" tabIndex="-1" role="img" data="/images/wmms-blk.svg" aria-label="Symbol of the Government of Canada" className={classes.width30} />
        <div className={classes.width100}>Version 1.0</div>
        <div className={classes.width100}>Alpha from the #DigitalDroneCollective</div>
      </div>
    </div>
  );
}
