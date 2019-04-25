import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const { CategoryApi } = require('../../backend/api/siteSurveyAPI');
const { PhaseApi } = require('../../backend/api/siteSurveyAPI');

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: null,
      phases: []
    };
  }

  componentWillMount() {
    const categoryId = this.props.match.params.id;

    if (categoryId) {
      this.setState({
        category: CategoryApi.getCategoryById(categoryId),
        phases: PhaseApi.getAllPhasesByCategoryID(categoryId)
      });
    }
  }

  // componentDidMount() {
  //   this.setState({ category: CategoryApi.getCategoryById() });
  // }
  render() {
    return (
      <div>
        <h1>
          <NavLink to="/sitesurvey" className="navbar-brand">
            {this.state.category.titleEng}
          </NavLink>
        </h1>
        <div>{this.state.phases.map(CreatePhaseRow, this)}</div>
      </div>
    );
  }
}

function CreatePhaseRow(phase) {
  return (
    <div key={phase.phase_id}>
      <div className="card mb-2 d-inline-block">
        <div className="card-body">
          <img
            className="card-img-top"
            src="../images/placeholder.png"
            alt="Logo"
          />
          <p className="card-text">{phase.titleEng}</p>
          <p className="card-text">
Phase
            {' '}
            {phase.OrderNum}
          </p>
          <p className="card-text">{phase.descEng}</p>
          <p className="card-text">
            {PhaseApi.getCompletedSubtasksCount(phase.phase_id)}
          </p>
          <h2 className="card-title h5">
            <NavLink className="card-link" to={`/phase/${phase.phase_id}`}>
              VIEW
            </NavLink>
          </h2>
        </div>
      </div>
      <br />
    </div>
  );
}

CategoryPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default CategoryPage;
