import React from 'react';
import $ from 'jquery'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import Home     from '../Home/Home';
import About    from '../About/About';
import Projects from '../Projects/components/Projects';
import Skills   from '../Skills/components/Skills'
import Contact  from '../Contact/components/Contact'

var page = $('html, body');

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function(e) {

    // stop auto scroll animation if the user manually scrolls during animation
    page.on('scroll wheel DOMMouseScroll mousewheel touchmove', function() {
      page.stop();
    });

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
});

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
