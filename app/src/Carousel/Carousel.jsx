import React, { PropTypes } from 'react';
// import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';

import './carousel.sass';

class Carousel extends React.Component {
  componentWillMount() {
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
    let buttonClass = this.props.buttonStyle || 'button-top';
    console.log(buttonClass);
    return (

      // <div className='project-carousel carousel-active'>
      //   <div className={buttonClass}>
      //     <button className='button-prev' onClick={this.prevButtonClick}>
      //       &lt;<span className='offscreen'>Previous</span>
      //     </button>
      //     <button className='button-next' onClick={this.nextButtonClick}>
      //       <span className='offscreen'>Next</span>&gt;
      //     </button>
      //   </div>
      //     <ol className='project-carousel-content'>
      //       {this.props.children.map((item, i) => {
      //         const _class = classNames(
      //           {'current': i === this.state.currentId}
      //         );
      //         return (
      //           <li className={_class} key={i}>
      //             {item}
      //           </li>
      //         )
      //       })}
      //     </ol>
      // </div>
      <div>
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          {this.props.children}
        </SwipeableViews>
        <div className='dots'>
          <div className={buttonClass}>
            <button className='button-prev' onClick={this.prevButtonClick}>
              &lt;<span className='offscreen'>Previous</span>
            </button>
            <button className='button-next' onClick={this.nextButtonClick}>
              <span className='offscreen'>Next</span>&gt;
            </button>
          </div>
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
  buttonStyle: PropTypes.string
}

export default Carousel;
