import React from 'react';
import { Router, Route } from 'react-router';

import NotFound from './components/NotFound';
import App from './components/App';
import About from './components/About';
import Courses from './components/Courses';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
  </Router>
);

export default Routes;