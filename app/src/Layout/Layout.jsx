import React, { PropTypes } from 'react';
import Scroll from 'react-scroll';
import className from 'classname';

import Navbar       from '../Navbar/Navbar';
import Home         from '../Home/Home';
import About        from '../About/About';
import Projects     from '../Projects/Projects';
import Resources    from '../Resources/Resources';
import Contact      from '../Contact/Contact';

import './layout.sass';

const { Element } = Scroll;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navPushEffect: false
    }
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  toggleNavPushEffect = () => {
    this.setState({
      navPushEffect: !this.state.navPushEffect
    })
  }
  render() {
    const layoutClass = className({
      'layout-content': true,
      'nav-push-effect': this.state.navPushEffect
    })
    return (
      <div className='layout'>
        <Navbar togglePushEffect={this.toggleNavPushEffect} />
        <div className={layoutClass}>
          <Element name='page0'>
            <Home      />
          </Element>
          <Element name='page1'>
            <About     />
          </Element>
          <Element name='page2'>
            <Projects  />
          </Element>
          <Element name='page3'>
            <Resources />
          </Element>
          <Element name='page4'>
            <Contact   />
          </Element>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node
  ])
}

export default Layout;
