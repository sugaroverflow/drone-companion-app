/* Todo:
  GuidanceList
    |_GuidanceCard
*/
import React from 'react';
import PropTypes, { object } from 'prop-types';
import GuidanceCard from './GuidanceCard';

const getGuidances = (props) => {
  const {
    guidances
  } = props;
  return (
    <div className="phases-accordion">
      {guidances.map(guidance => (
        <GuidanceCard
          key={guidance.guidanceId}
          guidance={guidance}
        />
      ))}
    </div>
  );
};
getGuidances.propTypes = {
  guidances: PropTypes.arrayOf(object).isRequired,
};

export default getGuidances;
