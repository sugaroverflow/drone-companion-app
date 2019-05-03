import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const { SiteSurveyApi } = require('../api/siteSurveyAPI');

function PhaseCard(props) {
  const { phase } = props;
  return (
    <div key={phase.phase_id}>
      <div className="card mb-2 d-inline-block">
        <div className="card-body">
          <img
            className="card-img-top"
            src="../images/pluralsight-logo.png"
            alt="Card Description"
          />
          <p className="card-text">{phase.titleEng}</p>
          <p className="card-text">
            Phase
            {' '}
            {phase.OrderNum}
          </p>
          <p className="card-text">{phase.descEng}</p>
          <p className="card-text">
            {SiteSurveyApi.getCompletedSubtasksCount(phase.phase_id)}
          </p>
          <h2 className="card-title h5">
            <NavLink className="card-link" to={`/phase/${phase.phase_id}`}>
              VIEW
            </NavLink>
          </h2>
        </div>
      </div>
      <br />
    </div>
  );
}
PhaseCard.propTypes = {
  phase: PropTypes.shape({
    phase_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
    OrderNum: PropTypes.string.isRequired,
  }).isRequired
};
export default PhaseCard;
