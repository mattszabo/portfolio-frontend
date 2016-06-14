import React from 'react';
import { Router, hashHistory, Redirect, Route } from 'react-router';

import Layout   from './Layout/Layout';
import Home     from './Home/Home';
import About    from './About/About';
import TodoApp  from './TodoApp/components/TodoApp';

const app = (
  <Router history={hashHistory}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={Layout}>
      <Route path="home"    component={Home}    />
      <Route path="about"   component={About}   />
      <Route path="todoapp" component={TodoApp} />
    </Route>
  </Router>
);

export default class App extends React.Component {
  render() {
    return(
      app
    );
  }
}
