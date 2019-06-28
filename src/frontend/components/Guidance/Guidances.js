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

import CssBaseline from '@material-ui/core/CssBaseline';
import GuidanceList from './GuidanceList';

import Header from '../../common/Header';
import Footer from '../../common/Footer';


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
      phaseOId, taskOId, stepOId
    } = match.params;

    if (phaseOId && taskOId && stepOId) {
      this.getGuidancesbyOId(phaseOId, taskOId, stepOId);
    }
  }

  getGuidancesbyOId = (phaseOId, taskOId, stepOId) => {
    fetch(`/api/phases/${phaseOId}/tasks/${taskOId}/steps/${stepOId}`)
      .then(res => res.json())
      .then((step) => {
        this.setState({ guidances: step.Guidances });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  nextButton = () => {
    const { match } = this.props;
    const {
      phaseOId, taskOId, stepOId
    } = match.params;
    if (stepOId < 3) {
      return (
        <NavLink className="btn btn-primary" to={`/phases/${phaseOId}/tasks/${taskOId}/steps/${Number.parseInt(stepOId, 10) + 1}`}>
          Next Step
        </NavLink>
      );
    }
    // If all steps are complete, temporary route to summary
    // @todo: update this logic to make it more robust
    return (
      <NavLink className="btn btn-primary" to={`/phases/${phaseOId}/tasks/${taskOId}/summary`}>
        Next
      </NavLink>
    );
  }

  backButton = () => {
    const { match } = this.props;
    const {
      phaseOId, taskOId, stepOId
    } = match.params;
    return (
      <NavLink className="btn btn-primary" to={`/phases/${phaseOId}/tasks/${taskOId}/steps/${stepOId}`}>
        Back
      </NavLink>
    );
  }

  render() {
    const { guidances } = this.state;
    const { match } = this.props;
    if (guidances !== null) {
      return (
        <React.Fragment>
          <CssBaseline />
          <Header title="Guidances" />

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
          <Footer />
        </React.Fragment>
      );
    }
    return '';
  }
}

Guidances.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseOId: null, taskOId: null, stepOId: null
    })
  })
};

Guidances.propTypes = {
  // @todo fix the issue with match and props here
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseOId: PropTypes.string.isRequired,
      stepOId: PropTypes.string.isRequired,
    })
  })
};
