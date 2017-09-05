import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';
import ToDosPage from './components/todo/ToDosPage';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="todo" component={ToDosPage} />
  </Route>
);
