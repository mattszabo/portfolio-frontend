import React, { PropTypes } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Pagination from './Pagination';
import Arrow from './Arrow';
import './carousel.sass';

class Carousel extends React.Component {
  componentWillMount = () => {
    this.setState({ index: this.props.startingSlide - 1 || 0 })
  }
  prevButtonClick = () => {
    let numItems = this.props.children.length;
    let index = this.state.index;
    let newIndex;

    newIndex = index === 0 ? numItems - 1 : index - 1;
    this.setState({ index: newIndex })
  }
  nextButtonClick = () => {
    let numItems = this.props.children.length;
    let index = this.state.index;
    let newIndex;

    newIndex = index === numItems - 1 ? 0 : newIndex = index + 1;
    this.setState({ index: newIndex })
  }
  handleChangeIndex = (index) => {
    this.setState({
      index: index
    });
  }
  slideLeft = () => {
    const { index } = this.state;
    const newIndex = index === 0 ? index : index - 1
    this.setState({
      index: newIndex
    })
  }
  slideRight = () => {
    const { index } = this.state;
    const newIndex = index === this.props.children.length - 1 ? index : index + 1
    this.setState({
      index: newIndex
    })
  }
  render() {
    const paginationStyle = this.props.paginationStyle || 'dots';

    return (
      <div className='carousel-container'>
        <div className='carousel-content'>
          <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex} resistance={true}>
            {this.props.children}
          </SwipeableViews>
        </div>
        <div className='carousel-pagination'>
          <Pagination
            pages={this.props.children}
            paginationStyle={paginationStyle}
            onClick={this.handleChangeIndex}
            currentId={this.state.index}
          />
        </div>
        <div className='carousel-buttons'>
          <span className='left-button' onClick={this.slideLeft}>
            <Arrow />
          </span>
          <span className='right-button' onClick={this.slideRight}>
            <Arrow />
          </span>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  paginationStyle: PropTypes.string,
  startingSlide: PropTypes.number
}

export default Carousel;
