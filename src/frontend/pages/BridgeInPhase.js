import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import withHeaderFooter from '../common/withHeaderFooter';
import IntroImg1 from '../../../public/images/intro-Images/tutorial-1.png';
import IntroImg2 from '../../../public/images/intro-Images/tutorial-2.png';
import IntroImg3 from '../../../public/images/intro-Images/tutorial-3.png';
import IntroImg4 from '../../../public/images/intro-Images/tutorial-4.png';

function BridgeInPhase(props) {
  const { t } = props;
  return (
    <React.Fragment>
      <h1 className="h4">{t('Tool introduction')}</h1>
      <p>This tool will teach you how to do a site survey through step-by-step instructions and guidance.</p>
      <div>
        <img src={IntroImg4} alt="" className="card-task-img" />
      </div>
      <NavLink className="btn btn-primary" to="/phases/">
                  Skip Introduction
      </NavLink>
    </React.Fragment>
  );
}

BridgeInPhase.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('home')(
  withHeaderFooter(BridgeInPhase, 'Tool introduction')
);
