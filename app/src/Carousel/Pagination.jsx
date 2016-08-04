import React, { PropTypes } from 'react'
import className from 'classname';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }
  // Couldn't figure out how to use arrow functions for auto binding
  // with a variable inside of a map scope
  handleClick(i) {
    console.log('index', i);
    this.props.onClick(i);
  }
  render() {
    return (
      <ol>
        {this.props.pages.map((page, i) => {
          const dotClass = className({
            active: i === this.props.currentId
          })
          return (
            <li key={i} index={i}>
              <svg
                id='dot'
                onClick={this.handleClick.bind(this, i)}
                className={dotClass}
                height="20" width="20">
                <circle cx="10" cy="10" r="4" />
              </svg>
            </li>
          )
        })}
      </ol>
    )
  }
}

Pagination.propTypes = {
  pages: PropTypes.array,
  paginationStyle: PropTypes.string,
  onClick: PropTypes.func,
  currentId: PropTypes.number.isRequired
}

export default Pagination;
