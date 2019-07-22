import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Quiz from 'react-quiz-component';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import withHeaderFooter from '../../common/withHeaderFooter';
import ProgressIndicator from '../../common/ProgressIndicator';
import TaskTitle from '../Task/TaskTitle';

class PostQuiz extends Component {
  constructor() {
    super();
    this.state = {
      task: null
    };
  }

  componentDidMount() {
    const { lang, onMounted, match } = this.props;
    const {
      phaseOId, taskOId
    } = match.params;
    this.loadData(lang);
    if (onMounted) {
      onMounted({
        changeLang: newLang => this.changeLang(newLang),
        backRoute: `/phases/${phaseOId}/tasks/${taskOId}/steps/`
      });
    }
  }


  getPostQuiz(lang, phaseOId, taskOId) {
    fetch(`/api/phases/${phaseOId}/tasks/${taskOId}?lang=${lang}`)
      .then(res => res.json())
      .then((task) => {
        this.setState({ task });
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
      this.getPostQuiz(lang, phaseOId, taskOId);
    }
  }

  changeLang(lang) {
    this.loadData(lang);
  }

  render() {
    const { t } = this.props;
    const { task } = this.state;
    if (task) {
      return (
        <>
          <ProgressIndicator currentProgress={2} />
          <TaskTitle title={task.title} />
          <div className="card-image-task">
            <Quiz quiz={task.postQuiz} showInstantFeedback />
            <div className="card-footer">
              <NavLink
                className="btn btn-secondary"
                to="/phases/?"
              >
                {t('Skip')}
              </NavLink>
            </div>
          </div>
        </>
      );
    }
    return '';
  }
}

PostQuiz.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseOId: null, taskOId: null
    })
  })
};

PostQuiz.propTypes = {
  // @todo fix the issue with match and props here
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseOId: PropTypes.string.isRequired,
      taskOId: PropTypes.string.isRequired,
    })
  }),
  lang: PropTypes.string.isRequired,
  onMounted: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};
export default withTranslation('quiz')(withHeaderFooter(PostQuiz, 'Post Quiz'));
