import React from 'react';
import { NavLink } from 'react-router-dom';
import i18n from '../i18n';

import TCLogo from '../../../public/images/official-logos/transport-canada/TC-logo-eng-white.png';
import CanadaLog from '../../../public/images/official-logos/canada-wordmark/CanadaWordmark_white.png';
import DroneSloganEn from '../../../public/images/official-logos/DRONE-slogan-EN.png';
import DroneSloganFr from '../../../public/images/official-logos/DRONE-slogan-FR.png';

export default function Homepage() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <React.Fragment>
      <main className="homepage">
        <div className="container">
          <div>
            <img
              src={TCLogo}
              alt="Government of Canada / Gouvernement du Canada"
              className="tcLog"
            />
          </div>
          <div>
            <img
              src={DroneSloganEn}
              alt="Drone safety Know before you go!"
              className="droneSloganBtm"
            />
          </div>

          <div className="langSelection">
            <div className="h5 white-text">
              Please select a language
            </div>
            <div className="h5 white-text">
              Veuillez sélectionner une langue
            </div>
            <div>
              <NavLink className="btn btn-primary" to="/intro" onClick={() => changeLanguage('en')}>
                    English
              </NavLink>

              <NavLink className="btn btn-primary" to="/intro" onClick={() => changeLanguage('fr')}>
                    Français
              </NavLink>
            </div>
          </div>
          <div className="droneRectangleBtm">
            <div>
              <img
                src={DroneSloganFr}
                alt="SÉCURITÉ DES DRONES RENSEIGNEZ-VOUS AVANT TOUT!"
                className="droneSloganBtm"
              />
            </div>
          </div>
          <div className="caLogContainer">
            <img
              src={CanadaLog}
              alt="Government of Canada / Gouvernement du Canada"
              className="caLogo"
            />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
