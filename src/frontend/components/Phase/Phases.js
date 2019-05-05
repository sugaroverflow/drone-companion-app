import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhaseList from './PhaseList';

export default class Phases extends Component {
  constructor() {
    super();
    this.state = {
      phases: []
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { moduleId } = params;
    this.getPhases(moduleId);
  }

  // Retrieves the list of items from the Express app
  getPhases = (moduleId) => {
    fetch(`/api/phases/${moduleId}`)
      .then(res => res.json())
      .then(phases => this.setState({ phases }));
  };

  render() {
    const { phases } = this.state;
    return <PhaseList phases={phases} />;
  }
}

Phases.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      moduleId: null
    })
  })
};

Phases.propTypes = {
  // @todo fix the issue with match and props here
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      moduleId: PropTypes.string.isRequired
    })
  })
};
