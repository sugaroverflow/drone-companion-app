/* Todo: https://sketch.cloud/s/ng0Yl/a/xppP9x
  Guidances:
    |_GuidanceIndicator
    |_GuidanceList
      |_GuidanceCard
    |_Next/Previous Guidance button
    |_Back button to go back to the guidance screen
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import GuidanceList from './GuidanceList';

export default class Guidances extends Component {
  constructor() {
    super();
    this.state = {
      guidances: null
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const {
      moduleOId, phaseOId, taskOId, stepOId
    } = match.params;

    if (moduleOId && phaseOId && taskOId && stepOId) {
      this.getGuidancesbyOId(moduleOId, phaseOId, taskOId, stepOId);
    }
  }

  getGuidancesbyOId = (moduleOId, phaseOId, taskOId, stepOId) => {
    fetch(`/api/modules/${moduleOId}/phases/${phaseOId}/tasks/${taskOId}/steps/${stepOId}`)
      .then(res => res.json())
      .then((step) => {
        this.setState({ guidances: step.guidances });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  nextButton = () => {
    const { match } = this.props;
    const {
      moduleOId, phaseOId, taskOId, stepOId
    } = match.params;
    return (
      <NavLink className="btn btn-primary" to={`/modules/${moduleOId}/phases/${phaseOId}/tasks/${taskOId}/steps/${Number.parseInt(stepOId, 10) + 1}`}>
        Next Step
      </NavLink>
    );
  }

  backButton = () => {
    const { match } = this.props;
    const {
      moduleOId, phaseOId, taskOId, stepOId
    } = match.params;
    return (
      <NavLink className="btn btn-primary" to={`/modules/${moduleOId}/phases/${phaseOId}/tasks/${taskOId}/steps/${stepOId}`}>
        Back
      </NavLink>
    );
  }

  render() {
    const { guidances } = this.state;
    const { match } = this.props;
    if (guidances !== null) {
      return (
        <div>
          <GuidanceList
            params={match.params}
            guidances={guidances}
          />
          <p>
            {this.nextButton()}
          </p>
          <p>
            {this.backButton()}
          </p>
        </div>
      );
    }
    return '';
  }
}

Guidances.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      moduleOId: null, phaseOId: null, taskOId: null, stepOId: null
    })
  })
};

Guidances.propTypes = {
  // @todo fix the issue with match and props here
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      moduleOId: PropTypes.string.isRequired,
      phaseOId: PropTypes.string.isRequired,
      stepOId: PropTypes.string.isRequired,
    })
  })
};
