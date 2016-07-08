import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './carousel.sass';

class Carousel extends React.Component {
  componentWillMount() {
    this.setState({
      currentId: 1
    })
  }
  prevButtonClick = () => {
    let numItems = this.props.children.length;
    let currentId = this.state.currentId;
    let newId;

    if (currentId === 0) {
      newId = numItems - 1;
    } else {
      newId = currentId - 1;
    }

    this.setState({
      currentId: newId
    })
  }
  nextButtonClick = () => {
    let numItems = this.props.children.length;
    let currentId = this.state.currentId;
    let newId;

    if (currentId === numItems - 1) {
      newId = 0;
    } else {
      newId = currentId + 1;
    }

    this.setState({
      currentId: newId
    })
  }
  render() {
    return (

      <div className='project-carousel carousel-active'>
        <div className='button-area'>
          <button onClick={this.prevButtonClick}>
            &lt;<span className='offscreen'>Previous</span>
          </button>
          <button onClick={this.nextButtonClick}>
            <span className='offscreen'>Next</span>&gt;
          </button>
        </div>

        <ol className='project-carousel-content'>
          {this.props.children.map((item, i) => {
            const _class = classNames({
              'current': i === this.state.currentId
            });
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
