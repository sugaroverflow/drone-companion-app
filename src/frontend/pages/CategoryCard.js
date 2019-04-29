import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function CategoryCard(props) {
  const { category } = props;
  return (
    <div className="card mb-2 d-inline-block">
      <div className="card-body">
        <img
          className="card-img-top"
          src="../images/pluralsight-logo.png"
          alt="Card description"
        />
        <p className="card-text">{category.titleEng}</p>
        <p className="card-text">{category.descEng}</p>
        <h2 className="card-title h5">
          <NavLink
            className="card-link"
            to={`/category/${category.category_id}`}
          >
            View
          </NavLink>
        </h2>
      </div>
    </div>
  );
}
CategoryCard.propTypes = {
  category: PropTypes.shape({
    category_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
    descEng: PropTypes.string.isRequired,
    descFra: PropTypes.string.isRequired,
  }).isRequired
};
export default CategoryCard;
