import React from 'react';
import { Route } from 'react-router-dom';

const Routes = ({
  component: Component,
  path
}) => {
  return <Route path={path} exact component={Component} />;
};


export default Routes;
