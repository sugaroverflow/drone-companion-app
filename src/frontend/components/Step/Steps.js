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
    const {
      moduleOId, phaseOId, taskOId
    } = match.params;
    if (task !== null) {
      return (
        <React.Fragment>
          <DisplayTaskInfo task={task} />
          <BrowserRouter>
            <div className="row pad-t">
              <div className="col-xs-6 col-xs-offset-3">
                <Route
                  render={({ history }) => (
                    <Wizard
                      history={history}
                      basename={`/modules/${moduleOId}/phases/${phaseOId}/tasks/${taskOId}/steps`}
                      render={({ step, steps }) => (
                        <div>
                          <Line
                            percent={(steps.indexOf(step) + 1) / steps.length * 100}
                          />
                          <Steps key={step.id} step={step}>
                            {task.steps.map((item, key) => (
                              <Step id={item.step_id} step={item}>
                                <StepCard
                                  key={key.orderNum}
                                  params={match.params}
                                  step={item}
                                />
                              </Step>
                            ))}
                          </Steps>
                        </div>
                      )}
                    />
                  )}
                />
              </div>
            </div>
          </BrowserRouter>
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
