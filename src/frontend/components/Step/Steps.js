/* @todo: https://sketch.cloud/s/ng0Yl/a/Qvv39w
  Step:
    |_StepIndicator
    |_StepCard
*/
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import StepList from './StepList';
import ProgressIndicator from '../../common/ProgressIndicator';
import withHeaderFooter from '../../common/withHeaderFooter';

class Steps extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1, // default to step 1
      task: null
    };
    this.nextStep = this.nextStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  getTaskbyId = (lang, phaseOId, taskOId, stepOId) => {
    fetch(`/api/phases/${phaseOId}/tasks/${taskOId}?lang=${lang}`)
      .then(res => res.json())
      .then((task) => {
        this.setState({ task, currentStep: Number.parseInt(stepOId, 10) });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadData(lang) {
    const { match } = this.props;
    const {
      phaseOId, taskOId, stepOId
    } = match.params;

    if (phaseOId && taskOId && stepOId) {
      this.getTaskbyId(lang, phaseOId, taskOId, stepOId);
    }
  }

  changeLang(lang) {
    this.loadData(lang);
  }

  // This function is created to track user progress in the future.
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  nextStep() {
    const { currentStep, task } = this.state;
    // If the current step is 1 or 2, then add one on "next" button click
    const nStep = currentStep >= task.Steps.length - 1 ? task.Steps.length : currentStep + 1;
    this.setState({
      currentStep: nStep
    });
  }

  render() {
    const { task, currentStep } = this.state;
    const { match } = this.props;
    if (task !== null) {
      return (
        <>
          <ProgressIndicator />
          <DisplayTaskInfo task={task} />
          <StepList
            params={match.params}
            currentStep={currentStep}
            steps={task.Steps}
            nextStep={this.nextStep}
          />
        </>
      );
    }
    return '';
  }
}

function DisplayTaskInfo({ task }) {
  return (
    <div>
      <div id="pointer">
        {`${task.title}`}
      </div>
    </div>
  );
}

Steps.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseId: null
    })
  })
};

Steps.propTypes = {
  // @todo fix the issue with match and props here
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseOId: PropTypes.string.isRequired,
      taskOId: PropTypes.string.isRequired,
      stepOId: PropTypes.string.isRequired
    })
  }),
  lang: PropTypes.string.isRequired,
  onMounted: PropTypes.func.isRequired
};

DisplayTaskInfo.propTypes = {
  task: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      orderNum: PropTypes.number.isRequired,
    }
  ).isRequired
};

export default withTranslation('step')(withHeaderFooter(Steps, 'Steps'));
