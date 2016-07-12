import React, { PropTypes } from 'react';
import $ from 'jquery'

import Navbar from '../Navbar/Navbar';

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
      <div className='layout'>
        <Navbar />
        <div>
          {this.props.children}
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
