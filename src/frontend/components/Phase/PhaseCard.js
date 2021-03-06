import React from 'react';
import PropTypes, { object } from 'prop-types';
import Task from '../Task/Task';


const PhaseCard = (props) => {
  const { phase } = props;
  const currentPhase = 2;
  const currentTask = 1;
  const open = (phase.orderNum === currentPhase);
  return (
    <div className="accordion phase-card">
      <details open={open}>
        <summary>
          <div className="phase-summary">
            <h2 className="phase-title h6">{phase.title}</h2>
            <p className="phase-desc">{phase.description}</p>
          </div>
        </summary>

        <div className="tgl-panel">
          <ul className="StepProgress">
            {phase.Tasks
              ? phase.Tasks.map(task => (
                <Task
                  key={task.orderNum}
                  task={task}
                  phaseOId={phase.orderNum}
                  currentTask={currentTask}
                  currentPhase={currentPhase}
                />
              ))
              : ''}
          </ul>
        </div>
      </details>
    </div>
  );
};

PhaseCard.propTypes = {
  phase: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    Tasks: PropTypes.arrayOf(object).isRequired,
    orderNum: PropTypes.number.isRequired
  }).isRequired
};
export default PhaseCard;
