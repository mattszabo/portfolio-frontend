import React, { PropTypes } from 'react'
import className from 'classname';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(i) {
    console.log('index', i);
    this.props.onClick(i);
  }
  render() {
    return (
      <div>
        <ol>
          {this.props.pages.map((page, i) => {
            const _class = className({
              active: i === this.props.currentId
            })
            return (
              <li key={i} index={i}>
                <svg
                  id='dot'
                  onClick={this.handleClick.bind(this, i)}
                  className={_class}
                  height="20" width="20">
                  <circle cx="10" cy="10" r="4" />
                </svg>
              </li>
            )
          })}
        </ol>
      </div>
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
