import React from 'react';
import PropTypes from 'prop-types';

const ProgressIndicator = (props) => {
  const { currentProgress } = props;
  const progresses = ['Prepare', 'Step-by-Step', 'Challenge'];

  function StepListItem({ progName, progOId }) {
    let classname = '';
    let srText = '';
    if (progOId < currentProgress) {
      classname = 'complete';
      srText = 'srText';
    } else if (progOId === currentProgress) {
      classname = 'active';
      srText = '';
    } else {
      srText = 'not completed';
    }
    return (
      <li className={classname}>
        <a href="#">{progName}</a>
        <span className="sr-only">{srText}</span>
      </li>
    );
  }
  return (
    <div aria-label="progress" className="step-indicator">
      <ul className="steps">

        {progresses.map(prog => (
          <StepListItem
            key={progresses.indexOf(prog)}
            progName={prog}
            progOId={progresses.indexOf(prog)}
          />
        ))}

      </ul>
    </div>
  );
};
export default ProgressIndicator;
