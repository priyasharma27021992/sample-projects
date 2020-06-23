import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import history from '../history';

import Page1 from '../components/Page1/Page1';
import Page2 from '../components/Page2/Page2';

function MainRoute() {
  return (
    <BrowserRouter history={history} >
        <Switch>
          <Routes exact path='/page2' component={Page2} />
          <Routes path='/' component={Page1} />
          <Redirect to="/" />
        </Switch>
    </BrowserRouter>
  )
}

export default MainRoute;

