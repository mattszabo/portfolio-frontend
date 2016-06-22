import React from 'react';
import $ from 'jquery'

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import Home         from '../Home/Home';
import About        from '../About/About';
import Projects     from '../Projects/components/Projects';
import References   from '../References/components/References';
import Contact      from '../Contact/components/Contact';

class Layout extends React.Component {

  componentDidMount() {
    var page = $('html, body');

    $('a[href*="#"]:not([href="#"])').click(function(e) {

      // stop auto scroll animation if the user manually scrolls during animation
      // note: has some side effect. e.g. two finger touch on track pad will interrupt
      page.on('scroll wheel DOMMouseScroll mousewheel touchmove', function() {
        page.stop();
      });

      // when there are multiple nav clicks we only want to action the most
      // recent, so we stop any other scroll animation before preceeding
      page.stop();

      let hash = this.hash
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target ? target : $('[name=' + target.slice(1) +']');
        if (target) {
          page.animate({
            scrollTop: target.offset().top
          }, 750, function() {
            location.hash = hash;
          });
          e.preventDefault();
        }
      }
    });
  }

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
          <div className='page-references'>
            <References   />
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

export default Layout;
