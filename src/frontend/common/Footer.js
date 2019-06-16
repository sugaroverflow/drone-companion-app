import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faQuestionCircle, faCog, faUser
} from '@fortawesome/free-solid-svg-icons';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<FontAwesomeIcon icon={faHome} />} />
      <BottomNavigationAction label="Help" icon={<FontAwesomeIcon icon={faQuestionCircle} />} />
      <BottomNavigationAction label="Settings" icon={<FontAwesomeIcon icon={faCog} />} />
      <BottomNavigationAction label="Account" icon={<FontAwesomeIcon icon={faUser} />} />
    </BottomNavigation>
  );
}
