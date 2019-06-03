import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhaseList from '../Phase/PhaseList';

export default class Modules extends Component {
  constructor() {
    super();
    this.state = {
      module: null,
      phases: []
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { moduleId } = match.params;
    if (moduleId) {
      this.getModulebyId(moduleId);
      this.getPhasesbymoduleId(moduleId);
    }
  }

  getModulebyId = (moduleId) => {
    fetch(`/api/modules/${moduleId}`)
      .then(res => res.json())
      .then((modules) => {
        this.setState({ module: modules[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPhasesbymoduleId = (moduleId) => {
    fetch(`/api/phases?module_id=${moduleId}`)
      .then(res => res.json())
      .then((phases) => {
        this.setState({ phases });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { phases, module } = this.state;

    return (
      <div>
        <DisplayModuleInfo module={module} />
        <PhaseList phases={phases} />

      </div>
    );
  }
}

function DisplayModuleInfo({ module }) {
  if (module !== null) {
    return (
      <h1>
        {`Module: ${module.titleEng}`}
      </h1>
    );
  }
  return '';
}


Modules.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      moduleId: null
    })
  })
};

Modules.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      moduleId: PropTypes.string.isRequired
    })
  })
};
