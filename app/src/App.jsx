import React from 'react'

import Layout from './Layout/Layout'
import Home         from './Home/Home';
import About        from './About/About';
import Projects     from './Projects/Projects';
import References   from './References/components/References';
import Contact      from './Contact/components/Contact';

const app = (
  <Layout>
    <Home       />
    <About      />
    <Projects   />
    <References />
    <Contact    />
  </Layout>
);

class App extends React.Component {
  render() {
    return(
      app
    );
  }
}
export default App
