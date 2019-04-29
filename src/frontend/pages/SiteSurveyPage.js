import React from 'react';
import CategoryCard from './CategoryCard';

const { SiteSurveyApi } = require('../../backend/api/siteSurveyAPI');

class SiteSurveyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.setState({ categories: SiteSurveyApi.getAllCategories() });
  }

  render() {
    return (
      <div>
        <h1>Categories</h1>
        <div>
          {this.state.categories.map(category => (
            <CategoryCard key={category.category_id} category={category} />
          ))}
        </div>
      </div>
    );
  }
}

export default SiteSurveyPage;
