import React from 'react';
import PropTypes from 'prop-types';

const PhaseCard = ({ phase }) => (
  <div className="accordion">
    {/* Accordion section 1 - need to add database calls for phase description
     and phase time estimate. I put placeholders there for testing. */}
    <details className="acc-group">
      <summary
        className="wb-toggle tgl-tab"
        data-toggle='{"parent": ".accordion", "group": ".acc-group"}'
      >
        {phase.titleEng}
        {phase.descEng}
        {phase.estimate}
      </summary>

      <div className="tgl-panel">
        <img
          className="card-image-task"
          src="./src/frontend/images/steps-icon-default.png"
          alt="Progress indication, you're on the first task."
        />
        <p className="card-text">
          Task etc
        </p>
        {/* @todo create proper NavLink */}
      </div>
    </details>

    {/* Accordion section 2 - need to add database calls for phase description
    and phase time estimate. I put placeholders there for testing. */}
    <details className="acc-group">
      <summary
        className="wb-toggle tgl-tab"
        data-toggle='{"parent": ".accordion", "group": ".acc-group"}'
      >
        {phase.titleEng}
        {phase.descEng}
        {phase.estimate}
      </summary>

      <div className="tgl-panel">
        <img
          className="card-image-task"
          src="./src/frontend/images/steps-icon-default.png"
          alt="Progress indication, you're on the first task."
        />
        <p className="card-text">
          Task etc
        </p>
        {/* @todo create proper NavLink */}
      </div>
    </details>

    {/* Accordion section 3 - need to add database calls for phase description and phase time estimate. I put placeholders there for testing. */}
    <details className="acc-group">
      <summary
        className="wb-toggle tgl-tab"
        data-toggle='{"parent": ".accordion", "group": ".acc-group"}'
      >
        {phase.titleEng}
        {phase.descEng}
        {phase.estimate}
      </summary>

      <div className="tgl-panel">
        <img
          className="card-image-task"
          src="./src/frontend/images/steps-icon-default.png"
          alt="Progress indication, you're on the first task."
        />
        <p className="card-text">
          Task etc
        </p>
        {/* @todo create proper NavLink */}
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
