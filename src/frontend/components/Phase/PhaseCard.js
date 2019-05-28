import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const PhaseCard = ({ phase }) => (
  <div className="accordion phase-card">
    <details className="acc-group">
      <summary
        className="wb-toggle tgl-tab"
        data-toggle='{"parent": ".accordion", "group": ".acc-group"}'
      >
        <div className="phase-summary">
          <h2 className="phase-title h6">{phase.titleEng}</h2>
          <p className="phase-desc">{phase.descEng}</p>
          <p className="phase-caption">
            Estimated time to complete:
            <span className="phase-estimate">
              {' '}
              {phase.estimate}
            </span>
          </p>
        </div>
      </summary>

      <div className="tgl-panel">
        <div className="card-text">
          {/* @todo: replace with actual task description */}
          <ol>
            <li>
              {' '}
              Task one
              <NavLink
                className="btn btn-primary"
                to={`/tasks/${phase.phase_id}`}
              >
                Begin Task
              </NavLink>
            </li>

            <li> Task two </li>
            <li> Task three </li>
          </ol>
        </div>

      </div>
    </details>
  </div>
);

PhaseCard.propTypes = {
  phase: PropTypes.shape({
    module_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
    descEng: PropTypes.string.isRequired,
    descFra: PropTypes.string.isRequired
  }).isRequired
};
export default PhaseCard;
