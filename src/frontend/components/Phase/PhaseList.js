import React from 'react';
import PropTypes, { object } from 'prop-types';
import PhaseCard from './PhaseCard';

const getPhases = ({ phases }) => (
  <div className="phases-accordion">
    {phases.map(phase => (
      <PhaseCard key={phase.phase_id} phase={phase} />
    ))}
  </div>
);

getPhases.propTypes = {
  phases: PropTypes.arrayOf(object).isRequired
};

export default getPhases;
