import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@gctools-components/aurora-ds/css/aurora.min.css';

const ModuleCard = ({ module }) => (
  <div className="module-card">
    <h2 className="h6">{module.titleEng}</h2>
    <div className="card-image-task">
      <img className="card-task-img" src={`/images/${module.imageUrlEng}`} alt="Placeholder" />
    </div>
    <p className="card-text">{module.descEng}</p>
    <div className="card-footer">
      <NavLink className={`btn btn-primary ${module.moduleStatus}`} to={`/modules/${module.orderNum}/phases/`}>
            Begin Module
      </NavLink>
    </div>
  </div>
);

ModuleCard.propTypes = {
  module: PropTypes.shape({
    module_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
    descEng: PropTypes.string.isRequired,
    descFra: PropTypes.string.isRequired,
    moduleStatus: PropTypes.string.isRequired,
  }).isRequired
};

export default ModuleCard;
