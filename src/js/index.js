// Javascript Entry Point

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ViewA from './view_a';
import ViewB from './view_b';
import ViewC from './view_c';
import Main from './main';

// <Route path="/" component={ViewA}/>
render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={ViewA}/>
      <Route path="/murray/:width/:height" component={ViewB}/>
    </Route>
    <Route path="/c" component={ViewC}/>
  </Router>
), document.querySelector('.app'))
