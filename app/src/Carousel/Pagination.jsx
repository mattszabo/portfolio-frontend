import React, { PropTypes } from 'react'
import className from 'classname';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(i) {
    // e.preventDefault();
    console.log('index', i);
    this.props.onClick(i);
  }
  render() {
    return (
      <div>
        {this.props.pages.map((page, i) => {
          // console.log('page: ', page)
          const _class = className({
            active: i === this.props.currentId
          })
          return (
            <li key={i} index={i}>
              <a className={_class} onClick={this.handleClick.bind(this, i)}>
                .
              </a>
            </li>
          )
        })}
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
