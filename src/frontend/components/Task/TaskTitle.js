import React from 'react';
import PropTypes, { object } from 'prop-types';

export default function TaskTitle({ title }) {
  return (
    <div>
      <div id="pointer">
        {`${title}`}
      </div>
    </div>
  );
}

TaskTitle.propTypes = {
  title: PropTypes.string.isRequired
};
