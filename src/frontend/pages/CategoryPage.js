import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import PhaseCard from './PhaseCard';

const { SiteSurveyApi } = require('../api/siteSurveyAPI');

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: null,
      phases: []
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    if (id) {
      this.setState({
        category: SiteSurveyApi.getCategoryById(id),
        phases: SiteSurveyApi.getAllPhasesByCategoryID(id)
      });
    }
  }

  render() {
    const { category, phases } = this.state;
    if (phases.length > 0) {
      return (
        <div>
          <h1>
            <NavLink to="/sitesurvey" className="navbar-brand">
              {category.titleEng}
            </NavLink>
          </h1>
          <div>
            {phases.map(phase => (
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired
};

export default CategoryPage;
