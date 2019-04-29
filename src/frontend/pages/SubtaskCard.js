import React from 'react';
import PropTypes from 'prop-types';

function TaskCard(props) {
  const { subtask } = props;
  return (
    <div key={subtask.subtask_id}>
      <div className="card mb-2 d-inline-block">
        <details>
          <summary>{subtask.titleEng}</summary>
          <div dangerouslySetInnerHTML={{ __html: subtask.guidanceEng }} />
        </details>
      </div>
      <br />
    </div>
  );
}
TaskCard.propTypes = {
  subtask: PropTypes.object.isRequired
};
export default TaskCard;
