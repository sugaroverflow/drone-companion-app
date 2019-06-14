import React from 'react';
import PropTypes, { object } from 'prop-types';
import PhaseCard from './PhaseCard';

const getPhases = ({ phases, moduleOId }) => (
  <div className="phases-accordion">
    {}
    {phases.map(phase => (
      <PhaseCard key={phase.phaseId} phase={phase} moduleOId={moduleOId} />
    ))}
  </div>
);

getPhases.propTypes = {
  phases: PropTypes.arrayOf(object).isRequired,
  moduleOId: PropTypes.number.isRequired
};

export default getPhases;
