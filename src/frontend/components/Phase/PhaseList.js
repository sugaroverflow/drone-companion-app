import React from 'react';
import PhaseCard from './PhaseCard';

const getPhases = phases => (
  <div className="phases-accordion">
    {phases.phases.map(phase => (
      <PhaseCard key={phase.phase_id} phase={phase} />
    ))}
  </div>
);

const PhaseList = phases => <div>{getPhases(phases)}</div>;

PhaseList.defaultProps = {
  phases: []
};

export default PhaseList;
