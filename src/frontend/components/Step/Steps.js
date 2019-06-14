/* @todo: https://sketch.cloud/s/ng0Yl/a/Qvv39w
  Step:
    |_StepIndicator
    |_StepCard
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { Wizard, Steps, Step } from 'react-albus';
import { Line } from 'rc-progress';
import StepCard from './StepCard';

export default class AppSteps extends Component {
  constructor() {
    super();
    this.state = {
      task: null
    };
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
        this.setState({ task });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { task } = this.state;
    const { match } = this.props;
    if (task !== null) {
      return (
        <React.Fragment>
          <DisplayTaskInfo task={task} />
          <div>
            <Wizard>
              <Steps>
                {/* @todo: Warning: Each child in a list should have a unique "key" prop. */}
                {task.steps.map((step, key) => (
                  <Step id={step.step_id}>
                    <StepCard
                      key={key.orderNum}
                      params={match.params}
                      step={step}
                    />
                  </Step>
                ))}
              </Steps>
            </Wizard>
          </div>
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

AppSteps.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseId: null
    })
  })
};

AppSteps.propTypes = {
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
