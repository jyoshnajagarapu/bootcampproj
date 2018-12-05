import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import NotFoundPage from './NotFoundPage.js';
import LoginPage from './LoginPage';
import FormPage from './FormPage';
import TablePage from './TablePage';
import Dashboard from './DashboardPage';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/> 
      <Route path="form" component={FormPage}/>
      <Route path="table" component={TablePage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
