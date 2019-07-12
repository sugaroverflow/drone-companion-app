import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Quiz from 'react-quiz-component';
import { NavLink } from 'react-router-dom';

import { withTranslation } from 'react-i18next';
import withHeaderFooter from '../../common/withHeaderFooter';
// import { quiz } from '../../../backend/data/quizData';


class PreQuiz extends Component {
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
      phaseOId, taskOId
    } = match.params;

    if (phaseOId && taskOId) {
      this.getPreQuiz(lang, phaseOId, taskOId);
    }
  }

  changeLang(lang) {
    this.loadData(lang);
  }

  render() {
    const { match, t } = this.props;
    const {
      phaseOId, taskOId
    } = match.params;
    const { task } = this.state;
    if (task) {
      return (
        <>
          <Container maxWidth="sm">
            <Quiz quiz={task.preQuiz} showInstantFeedback />
            <NavLink
              className="btn btn-secondary"
              to={`/phases/${phaseOId}/tasks/${taskOId}/steps/`}
            >
              {t('Skip')}

            </NavLink>
          </Container>
        </>
      );
    }
    return '';
  }
}

PreQuiz.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseOId: null, taskOId: null
    })
  })

};

PreQuiz.propTypes = {
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

export default withTranslation('quiz')(withHeaderFooter(PreQuiz, 'Quiz me!'));
