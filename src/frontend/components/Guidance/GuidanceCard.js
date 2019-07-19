/* Todo:
  GuidanceCard: https://sketch.cloud/s/jPQEW/a/LArbMl
    |_Summary: Guidance Title
    |_Detail:
      |_Guidance Image
      |_Guidance Text
*/
import React from 'react';
import PropTypes from 'prop-types';

const GuidanceCard = (props) => {
  const { guidance } = props;
  return (
    <div className="accordion phase-card">
      <details>
        <summary>
          <div className="phase-summary">
            <h2 className="phase-title h6">{guidance.title}</h2>
          </div>
        </summary>
        <div className="tgl-panel">
          <div dangerouslySetInnerHTML={{ __html: guidance.content }} />
        </div>
      </details>
    </div>
  );
};

GuidanceCard.propTypes = {
  guidance: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
};
export default GuidanceCard;
