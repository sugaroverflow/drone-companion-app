/* @todo: https://sketch.cloud/s/ng0Yl/a/Qvv39w
  Step:
    |_StepIndicator
    |_StepCard
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StepList from './StepList';

export default class Steps extends Component {
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
    const { match } = this.props;
    const {
      moduleOId, phaseOId, taskOId, stepOId
    } = match.params;

    if (moduleOId && phaseOId && taskOId && stepOId) {
      this.getTaskbyId(moduleOId, phaseOId, taskOId, stepOId);
    }
  }

  getTaskbyId = (moduleOId, phaseOId, taskOId, stepOId) => {
    fetch(`/api/modules/${moduleOId}/phases/${phaseOId}/tasks/${taskOId}`)
      .then(res => res.json())
      .then((task) => {
        this.setState({ task, currentStep: Number.parseInt(stepOId, 10) });
      })
      .catch((error) => {
        console.log(error);
      });
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
    const nStep = currentStep >= task.steps.length - 1 ? task.steps.length : currentStep + 1;
    this.setState({
      currentStep: nStep
    });
  }

  render() {
    const { task, currentStep } = this.state;
    const { match } = this.props;
    // console.log(stepOId);
    if (task !== null) {
      return (
        <React.Fragment>
          {/* @todo: step indicator */}
          <DisplayTaskInfo task={task} />
          <StepList
            params={match.params}
            currentStep={currentStep}
            steps={task.steps}
            nextStep={this.nextStep}
          />
        </React.Fragment>
      );
    }
    return '';
  }
}

function DisplayTaskInfo({ task }) {
  return (
    <div>
      <h1 className="h6">
        {`${task.titleEng}`}
      </h1>
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
      moduleOId: PropTypes.string.isRequired
    })
  })
};

DisplayTaskInfo.propTypes = {
  task: PropTypes.shape(
    {
      task_id: PropTypes.string.isRequired,
      titleEng: PropTypes.string.isRequired,
      orderNum: PropTypes.string.isRequired,
    }
  ).isRequired
};
