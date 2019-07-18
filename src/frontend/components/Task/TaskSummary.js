import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import withHeaderFooter from '../../common/withHeaderFooter';
import TaskTitle from './TaskTitle';
import ProgressIndicator from '../../common/ProgressIndicator';


class TaskSummary extends Component {
  constructor() {
    super();
    this.state = {
      task: null
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

  getTaskbyId = (lang, phaseOId, taskOId) => {
    fetch(`/api/phases/${phaseOId}/tasks/${taskOId}?lang=${lang}`)
      .then(res => res.json())
      .then((task) => {
        this.setState({ task });
        console.log(task);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadData(lang) {
    const { match } = this.props;
    const {
      phaseOId, taskOId
    } = match.params;

    if (phaseOId && taskOId) {
      this.getTaskbyId(lang, phaseOId, taskOId);
    }
  }

  changeLang(lang) {
    this.loadData(lang);
  }

  render() {
    const { match } = this.props;
    const {
      phaseOId, taskOId
    } = match.params;
    const { task } = this.state;
    if (task) {
      return (
      <React.Fragment>
        <ProgressIndicator currentProgress={1} />
        <TaskTitle title={task.title} />
        <div className="task-card">
          <h2 className="h4">Step-by-Step Complete!</h2>
          <p> Way to go! Check your knowledge with a quiz, or skip to go to the next section.</p>
          <div className="card-footer">
            <NavLink
              className="btn btn-primary"
              to={`/phases/${phaseOId}/tasks/${taskOId}/postQuiz/`}
            >
                Challenge
            </NavLink>
            <NavLink
              className="btn btn-secondary"
              to="/phases/"
            >
                Skip
            </NavLink>
          </div>
        </div>
      </React.Fragment>
      );
    }
    return '';
  }
}

TaskSummary.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseOId: null, taskOId: null
    })
  })
};

TaskSummary.propTypes = {
  // @todo fix the issue with match and props here
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseOId: PropTypes.string.isRequired,
      taskOId: PropTypes.string.isRequired,
    })
  }),
  onMounted: PropTypes.func.isRequired,
};
export default withTranslation('translation')(withHeaderFooter(TaskSummary, 'Task Summary'));
