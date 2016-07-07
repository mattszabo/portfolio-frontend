import React, { PropTypes } from 'react';

import './carousel.sass';

class Carousel extends React.Component {
  constructor(props){
    super(props);
    // let { currentItem } = this.props || 0;
  }
  prevButtonClick = () => {
    console.log('prev');
  }
  nextButtonClick = () => {
    console.log('next');
  }
  render() {
    return (
      <div className='project-carousel carousel-active'>
        <div className='button-area'>
          <button onClick={this.prevButtonClick}>
            &#x25C4;<span className='offscreen'>Previous</span>
          </button>
          <button onClick={this.nextButtonClick}>
            <span className='offscreen'>Next</span>&#x25BA;
          </button>
        </div>
        <ol className='project-carousel-content'>
          {this.props.children.map((item, i) => {
            let _class = item.props.isCurrent ? 'current' : ''
            console.log('_clasS: ', _class)
            return (
              <li className={_class}>
                <CarouselItem key={i} i={i}>
                  {item}
                </CarouselItem>
              </li>
            )
          })}
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

class CarouselItem extends React.Component {
  render() {
    return(
      <div>{this.props.children}</div>
    );
  }
}

CarouselItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}


export { Carousel as default, CarouselItem };
