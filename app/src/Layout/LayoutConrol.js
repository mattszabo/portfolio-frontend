import $ from 'jquery'

var page = $('html, body');

const smoothScroll = $(function() {
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
})

export default smoothScroll
