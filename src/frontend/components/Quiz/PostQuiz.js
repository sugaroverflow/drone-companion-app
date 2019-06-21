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


export default class postQuiz extends Component {
  componentDidMount() { }

  render() {
    const { match } = this.props;
    const {
      phaseOId
    } = match.params;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header title="Learning Checks" />
        <main>
          <Container maxWidth="sm">
            <Quiz quiz={quiz} showInstantFeedback />
            <NavLink
              className="btn btn-secondary"
              to="/phases/"
            >
                Skip
            </NavLink>
          </Container>
        </main>
        <Footer />
      </React.Fragment>
    );
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