import React, { PropTypes } from 'react';

import './carousel.sass';

class Carousel extends React.Component {
  prevButtonClick = () => {
    console.log('prev');
  }
  nextButtonClick = () => {
    console.log('next');
  }
  render() {
    return (
      <div className='project-carousel active'>
        <div className='button-area'>
          <button onClick={this.prevButtonClick}>
            &#x25C4;<span className='offscreen'>Previous</span>
          </button>
          <button onClick={this.nextButtonClick}>
            <span className='offscreen'>Next</span>&#x25BA;
          </button>
        </div>
        <ol className='project-carousel-content'>
          {this.props.children}
        </ol>
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Carousel;
