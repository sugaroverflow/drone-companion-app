import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import PhaseCard from './PhaseCard';

const { SiteSurveyApi } = require('../../backend/api/siteSurveyAPI');

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: null,
      phases: []
    };
  }

  componentDidMount() {
    const categoryId = this.props.match.params.id;

    if (categoryId) {
      this.setState({
        category: SiteSurveyApi.getCategoryById(categoryId),
        phases: SiteSurveyApi.getAllPhasesByCategoryID(categoryId)
      });
    }
  }

  render() {
    if (this.state.phases.length > 0) {
      return (
        <div>
          <h1>
            <NavLink to="/sitesurvey" className="navbar-brand">
              {this.state.category.titleEng}
            </NavLink>
          </h1>
          <div>
            {this.state.phases.map(phase => (
              <PhaseCard key={phase.phase_id} phase={phase} />
            ))}
          </div>
        </div>
      );
    }
    return <div>No item found!</div>;
  }
}

CategoryPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default CategoryPage;
