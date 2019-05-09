import React from 'react';
import CategoryCard from './CategoryCard';

const axios = require('axios');

const { SiteSurveyApi } = require('../api/siteSurveyAPI');

const dataUri = 'http://localhost:8080/api';

class SiteSurveyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    SiteSurveyApi.getAllCategories().then(
      (res) => {
        this.setState({ categories: res.data });
      }
    );
    // this.setState({ categories: SiteSurveyApi.getAllCategories() });
    // // call axios directly
    // axios.get(`${dataUri}/categories/`)
    //   .then((res) => {
    //     this.setState({ categories: res.data });
    //   });
  }

  render() {
    const { categories } = this.state;
    console.log('These are the categories:');
    console.log(categories);
    return (
      <div>
        <h1>Categories</h1>
        <div>
          {/* {categories.map(category => (
            <CategoryCard key={category.category_id} category={category} />
          ))} */}
        </div>
      </div>
    );
  }
}

export default SiteSurveyPage;
