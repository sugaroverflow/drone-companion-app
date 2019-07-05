import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Quiz from 'react-quiz-component';
import { NavLink } from 'react-router-dom';
import { withTranslation, I18nextProvider } from 'react-i18next';
import withHeaderFooter from '../../common/withHeaderFooter';

import '@gctools-components/aurora-ds/css/aurora.min.css';


class postQuiz extends Component {
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
        changeLang: lang => this.changeLang(lang)
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
    const { match, i18n, t } = this.props;
    const {
      phaseOId
    } = match.params;
    const { task } = this.state;
    if (task) {
      return (
        <I18nextProvider i18n={i18n}>
          <CssBaseline />
          <Container maxWidth="sm">
            <Quiz quiz={task.preQuiz} showInstantFeedback />
            <NavLink
              className="btn btn-secondary"
              to="/phases/"
            >
              {t('Skip')}
            </NavLink>
          </Container>
        </I18nextProvider>
      );
    }
    return '';
  }
}

postQuiz.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseOId: null, taskOId: null
    })
  })
};

postQuiz.propTypes = {
  // @todo fix the issue with match and props here
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      phaseOId: PropTypes.string.isRequired,
      taskOId: PropTypes.string.isRequired,
    })
  })
};
export default withTranslation('quiz')(withHeaderFooter(postQuiz, 'Post Quiz'));
