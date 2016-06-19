import React from 'react';
import { Router, Redirect, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

import Layout   from './Layout/Layout';
import Home     from './Home/Home';
import About    from './About/About';
import Projects from './Projects/components/Projects';
import Skills   from './Skills/components/Skills'
import Contact   from './Contact/components/Contact'

let history = useRouterHistory(createHashHistory)({ queryKey: false })

const app = (
  <Router history={history}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={ Layout }>
      <Route path="home"      component={ Home }      />
      <Route path="about"     component={ About }     />
      <Route path="projects"  component={ Projects }  />
      <Route path="skills"    component={ Skills }    />
      <Route path="contact"   component={ Contact }   />
    </Route>
  </Router>
);

class App extends React.Component {
  render() {
    return(
      app
    );
  }
}
export default App
