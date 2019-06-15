import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import TaskStep from './TaskStep';

const PhaseCard = ({ phase }) => (
  <div className="accordion phase-card">
    <details>
      <summary>
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
        <ul className="StepProgress">
          {
              (phase.tasks)
                ? phase.tasks.map(task => (
                  <TaskStep
                    key={task.task_id}
                    task={task}
                    phaseOId={phase.orderNum}
                  />
                )) : ''
              }
        </ul>
        <NavLink
          className="btn btn-primary"
          to={`phases/${phase.phase_id}/tasks/`}
        >
         Start
        </NavLink>
      </div>
    </details>
  </div>
);

PhaseCard.propTypes = {
  phase: PropTypes.shape({
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
    descEng: PropTypes.string.isRequired,
    descFra: PropTypes.string.isRequired
  }).isRequired,
};
export default PhaseCard;
