import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const styles = {
  // card: {
  //   maxWidth: '18rem'
  // }
};

const PhaseCard = ({ phase }) => (
  // <Grid item xs={4}>
  // needs to be updated and idk how - AP

  <div className="accordion">
  {/* Accordion section 1 - need to add database calls for phase description and phase time estimate. I put placeholders there for testing.*/}
    <details className="acc-group">
      <summary className="wb-toggle tgl-tab" data-toggle='{"parent": ".accordion", "group": ".acc-group"}'>{phase.titleEng}{phase.descEng}{phase.estimate}</summary>
      
        <div class="tgl-panel">
        <img class="card-image-task" src="./src/frontend/images/steps-icon-default.png" alt="Progress indication, you're on the first task.">
        <p className="card-text">{task.1}{task.2}etc</p>
            {/* @todo create proper NavLink */}
        </div>
    </details>

{/* Accordion section 2 - need to add database calls for phase description and phase time estimate. I put placeholders there for testing.*/}
    <details className="acc-group">
      <summary className="wb-toggle tgl-tab" data-toggle='{"parent": ".accordion", "group": ".acc-group"}'>{phase.titleEng}{phase.descEng}{phase.estimate}</summary>
      
        <div class="tgl-panel">
        <img class="card-image-task" src="./src/frontend/images/steps-icon-default.png" alt="Progress indication, you're on the first task.">
        <p className="card-text">{task.1}{task.2}etc</p>
            {/* @todo create proper NavLink */}
        </div>
    </details>

    {/* Accordion section 3 - need to add database calls for phase description and phase time estimate. I put placeholders there for testing.*/}
    <details className="acc-group">
      <summary className="wb-toggle tgl-tab" data-toggle='{"parent": ".accordion", "group": ".acc-group"}'>{phase.titleEng}{phase.descEng}{phase.estimate}</summary>
      
        <div class="tgl-panel">
        <img class="card-image-task" src="./src/frontend/images/steps-icon-default.png" alt="Progress indication, you're on the first task.">
        <p className="card-text">{task.1}{task.2}etc</p>
            {/* @todo create proper NavLink */}
        </div>
    </details>
  </div>

// This will have to be changed to match the wireframe, but beyond my ability!
      <div className="card-footer">
        <NavLink className="btn btn-primary" to={`/Tasks/${phase.phase_id}`}>
          Begin Phase
      </NavLink>
      </div>
 
  </div>
  // </Grid>
);

PhaseCard.propTypes = {
  phase: PropTypes.shape({
    module_id: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    titleFra: PropTypes.string.isRequired,
    descEng: PropTypes.string.isRequired,
    descFra: PropTypes.string.isRequired
  }).isRequired
};
export default withStyles(styles)(PhaseCard);
