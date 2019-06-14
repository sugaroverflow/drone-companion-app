import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhaseList from './PhaseList';

export default class Phases extends Component {
  constructor() {
    super();
    this.state = {
      module: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { moduleOId } = match.params;
    if (moduleOId) {
      this.getModulebyOId(moduleOId);
    }
  }

  getModulebyOId = (moduleOId) => {
    fetch(`/api/modules/${moduleOId}`)
      .then(res => res.json())
      .then((module) => {
        this.setState({ module });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { module } = this.state;
    if (module) {
      return (
        <div>
          <h1>
            {`Module: ${module.titleEng}`}
          </h1>
          <PhaseList phases={module.Phases} moduleOId={module.orderNum} />
        </div>
      );
    }
    return '';
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      moduleOId: PropTypes.string.isRequired
    })
  })
};
