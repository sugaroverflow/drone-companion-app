import React from 'react';
import '@gctools-components/aurora-ds/css/aurora.min.css';

function CategoryCard() {
  return (
    <div className="card mb-2 d-inline-block" style={{ maxWidth: '18rem' }}>
      <img className="card-img-top" src="..." alt="Caption" />
      <div className="card-body">
        <img alt="small avatar" className="avatar avatar-sm" src="https://bit.ly/2GLjkzx" />
        <h3 className="card-title h5">Category Title</h3>
        <div className="card-subtitle text-muted">Category Description</div>
        <p className="card-text">Category Description</p>
        <a href="/api/siteSurvey" className="card-link">Help Links</a>
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
//   classes: PropTypes.object.isRequired,
};

export default CategoryCard;
