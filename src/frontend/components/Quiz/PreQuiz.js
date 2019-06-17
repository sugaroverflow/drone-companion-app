import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Quiz from 'react-quiz-component';
import { NavLink } from 'react-router-dom';
import { quiz } from '../../../backend/data/quizData';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import '@gctools-components/aurora-ds/css/aurora.min.css';


export default class preQuiz extends Component {
  componentDidMount() { }

  render() {
    const { match } = this.props;
    const {
      phaseOId, taskOId
    } = match.params;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <main>
          <Container maxWidth="sm">
            <Quiz quiz={quiz} showInstantFeedback />
            <NavLink
              className="btn btn-primary"
              to={`/phases/${phaseOId}/tasks/${taskOId}/steps/`}
            >
              {' '}
                Skip
            </NavLink>
          </Container>
        </main>
        <Footer />
      </React.Fragment>
    );
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
  })
};
