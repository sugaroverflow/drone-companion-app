import React from 'react';
import Grid from '@material-ui/core/Grid';
import ModuleCard from './ModuleCard';

const getModules = modules => (
  <Grid container spacing={24}>
    {
      modules.modules.map(module => <ModuleCard key={module.module_id} module={module} />)
    }
  </Grid>
);

const ModuleList = modules => <div>{getModules(modules)}</div>;

ModuleList.defaultProps = {
  modules: []
};

export default ModuleList;
