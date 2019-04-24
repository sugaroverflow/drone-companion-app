/* @todo whats the difference between this and the category page?

import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const CategoryApi = require("../../API/SiteSurveyApi").CategoryApi;

class SiteSurveyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    this.setState({ categories: CategoryApi.getAllCategories() });
  }
  render() {
    return (
      <div>
        <h1>Categories</h1>
        <div>{this.state.categories.map(CreateCategoryRow, this)}</div>
      </div>
    );
  }
}

function CreateCategoryRow(category) {
  return (
    <div key={category.category_id}>
      <div className="card mb-2 d-inline-block">
        <div className="card-body">
          <img
            className="card-img-top"
            src="../images/pluralsight-logo.png"
            alt="Card image cap"
          />
          <p className="card-text">{category.titleEng}</p>
          <p className="card-text">{category.descEng}</p>
          <h2 className="card-title h5">
            <NavLink
              className="card-link"
              to={"/category/" + category.category_id}
            >
              View
            </NavLink>
          </h2>
        </div>
      </div>
      <br />
    </div>
  );
}

SiteSurveyPage.propTypes = {
  match: PropTypes.object.isRequired
  // id: PropTypes.string.isRequired
};

export default SiteSurveyPage;
