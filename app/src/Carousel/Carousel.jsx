import React, { PropTypes } from 'react';
import SwipeableViews from 'react-swipeable-views';

import './carousel.sass';
import Pagination from './Pagination';

class Carousel extends React.Component {
  componentWillMount = () => {
    this.setState({ index: 1 })
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
  };
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
          <ol>
            <Pagination
              pages={this.props.children}
              paginationStyle={paginationStyle}
              onClick={this.handleChangeIndex}
              currentId={this.state.index}
            />
          </ol>
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
  paginationStyle: PropTypes.string
}

export default Carousel;
