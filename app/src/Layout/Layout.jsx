import React from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import Home     from '../Home/Home';
import About    from '../About/About';
import Projects from '../Projects/components/Projects';
import Skills   from '../Skills/components/Skills'
import Contact  from '../Contact/components/Contact'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='content'>
          <div className='page-home'>
            <Home     />
          </div>
          <div className='page-about'>
            <About    />
          </div>
          <div className='page-projects'>
            <Projects />
          </div>
          <div className='page-skills'>
            <Skills   />
          </div>
          <div className='page-contact'>
            <Contact  />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}
