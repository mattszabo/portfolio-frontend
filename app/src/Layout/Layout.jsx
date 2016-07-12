import React, { PropTypes } from 'react';
import Scroll from 'react-scroll';

import Navbar       from '../Navbar/Navbar';
import Home         from '../Home/Home';
import About        from '../About/About';
import Projects     from '../Projects/Projects';
import References   from '../References/components/References';
import Contact      from '../Contact/components/Contact';

const { Element, Events } = Scroll;

class Layout extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', () => {
      console.log('end', arguments);
    })
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className='layout'>
        <Navbar />
        <div>
          <Element name='page0'>
            <Home       />
          </Element>
          <Element name='page1'>
            <About      />
          </Element>
          <Element name='page2'>
            <Projects   />
          </Element>
          <Element name='page3'>
            <References />
          </Element>
          <Element name='page4'>
            <Contact    />
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
