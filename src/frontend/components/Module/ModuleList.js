import React from 'react';
import PropTypes, { object } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ModuleCard from './ModuleCard';

const getModules = ({ modules }) => (
  <Grid container spacing={24}>
    {
      modules.map(module => <ModuleCard key={module.moduleId} module={module} />)
    }
  </Grid>
);

getModules.propTypes = {
  modules: PropTypes.arrayOf(object).isRequired
};

export default getModules;
