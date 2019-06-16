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
          <h2 className="phase-title h6">{guidance.titleEng}</h2>
        </summary>
        <div className="tgl-panel">
          <img className="card-task-img" src={`/images/${guidance.imageUrlEng}`} alt="Placeholder" />
          <p>
            {guidance.contentEng}
          </p>
        </div>
      </details>
    </div>
  );
};

GuidanceCard.propTypes = {
  guidance: PropTypes.shape({
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
    contentEng: PropTypes.string.isRequired,
    contentFra: PropTypes.string.isRequired
  }).isRequired,
};
export default GuidanceCard;
