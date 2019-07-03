import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Quiz from 'react-quiz-component';
import { NavLink } from 'react-router-dom';
import '@gctools-components/aurora-ds/css/aurora.min.css';
import { withTranslation } from 'react-i18next';
import withHeaderFooter from '../../common/withHeaderFooter';
// import { quiz } from '../../../backend/data/quizData';


class preQuiz extends Component {
  constructor() {
    super();
    this.state = {
      task: null
    };
  }

  componentDidMount() {
    const { lang } = this.props;
    this.loadData(lang);
  }


  getPreQuiz(lang, phaseOId, taskOId) {
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
      phaseOId, taskOId, stepOId
    } = match.params;

    if (phaseOId && taskOId) {
      this.getPreQuiz(lang, phaseOId, taskOId, stepOId);
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
          <CssBaseline />
          <Container maxWidth="sm">
            <Quiz quiz={task.preQuiz} showInstantFeedback />
            <NavLink
              className="btn btn-primary"
              to={`/phases/${phaseOId}/tasks/${taskOId}/steps/`}
            >
              {' '}
                Skip
            </NavLink>
          </Container>
        </React.Fragment>
      );
    }
    return '';
  }
}

preQuiz.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseOId: null, taskOId: null
    })
  })
};

preQuiz.propTypes = {
  // @todo fix the issue with match and props here
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseOId: PropTypes.string.isRequired,
      taskOId: PropTypes.string.isRequired,
    })
  }),
  lang: PropTypes.string.isRequired
};

export default withTranslation('translation')(withHeaderFooter(preQuiz, 'Conducting Site Surveys'));
