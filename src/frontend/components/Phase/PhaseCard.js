import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

const PhaseCard = ({ phase }) => (
  <div className="accordion phase-card">
    <details>
      <summary>
        <div className="phase-summary">
          <h2 className="phase-title h6">{phase.title}</h2>
          <p className="phase-desc">{phase.description}</p>
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
              (phase.Tasks)
                ? phase.Tasks.map(task => (
                  <Task
                    key={task.orderNum}
                    task={task}
                    phaseOId={phase.orderNum}
                  />
                )) : ''
              }
        </ul>
      </div>
    </details>
  </div>
);

PhaseCard.propTypes = {
  phase: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
};
export default PhaseCard;
