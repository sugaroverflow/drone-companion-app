import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import '@gctools-components/aurora-ds/css/aurora.min.css';


export default class TaskSummary extends Component {
  componentDidMount() { }

  render() {
    const { match } = this.props;
    const {
      phaseOId, taskOId
    } = match.params;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header title="Task Summary" />
        <main>
          <Container maxWidth="sm">
            <h2>Step-by-Step Complete!</h2>
            <p> Way to go! Check your knowledge with a quiz, or skip to go to the next section.</p>
            <NavLink
              className="btn btn-primary"
              to={`/phases/${phaseOId}/tasks/${taskOId}/postQuiz/`}
            >
                Quiz Me!
            </NavLink>
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
  })
};