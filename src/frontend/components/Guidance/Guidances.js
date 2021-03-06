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
import { withTranslation } from 'react-i18next';

import { NavLink } from 'react-router-dom';

import GuidanceList from './GuidanceList';

import withHeaderFooter from '../../common/withHeaderFooter';
import ProgressIndicator from '../../common/ProgressIndicator';
import TaskTitle from '../Task/TaskTitle';


class Guidances extends Component {
  constructor() {
    super();
    this.state = {
      step: null
    };
  }

  componentDidMount() {
    const { lang, onMounted } = this.props;
    this.loadData(lang);
    if (onMounted) {
      onMounted({
        changeLang: newLang => this.changeLang(newLang),
        backRoute: '/phases'
      });
    }
  }

  getGuidancesbyOId = (dbLang, phaseOId, taskOId, stepOId) => {
    fetch(
      `/api/phases/${phaseOId}/tasks/${taskOId}/steps/${stepOId}?lang=${dbLang}`
    )
      .then(res => res.json())
      .then((step) => {
        this.setState({ step });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  nextButton = () => {
    const { match, t } = this.props;
    const { phaseOId, taskOId, stepOId } = match.params;
    if (stepOId < 3) {
      return (
        <NavLink
          className="btn btn-primary"
          to={`/phases/${phaseOId}/tasks/${taskOId}/steps/${Number.parseInt(
            stepOId,
            10
          ) + 1}`}
        >
          {t('Next Step')}
        </NavLink>
      );
    }
    // If all steps are complete, temporary route to summary
    // @todo: update this logic to make it more robust
    return (
      <NavLink
        className="btn btn-primary"
        to={`/phases/${phaseOId}/tasks/${taskOId}/summary`}
      >
        {t('Next Step')}
      </NavLink>
    );
  };

  backButton = () => {
    const { match, t } = this.props;
    const { phaseOId, taskOId, stepOId } = match.params;
    return (
      <NavLink
        className="btn btn-primary"
        to={`/phases/${phaseOId}/tasks/${taskOId}/steps/${stepOId}`}
      >
        {t('Back')}
      </NavLink>
    );
  };

  loadData(lang) {
    const { match } = this.props;
    const { phaseOId, taskOId, stepOId } = match.params;

    if (phaseOId && taskOId && stepOId) {
      this.getGuidancesbyOId(lang, phaseOId, taskOId, stepOId);
    }
  }

  changeLang(lang) {
    this.loadData(lang);
  }

  render() {
    const { step } = this.state;
    const { match } = this.props;
    if (step) {
      return (
        <>
          <ProgressIndicator currentProgress={1} />
          <TaskTitle title={step.title} />
          <GuidanceList params={match.params} guidances={step.Guidances} />
          <p>{this.nextButton()}</p>
          <p>{this.backButton()}</p>
        </>
      );
    }
    return '';
  }
}

Guidances.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseOId: null,
      taskOId: null,
      stepOId: null
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
      taskOId: PropTypes.string.isRequired
    })
  }),
  lang: PropTypes.string.isRequired,
  onMounted: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation('guidance')(
  withHeaderFooter(Guidances, 'Guidance')
);
