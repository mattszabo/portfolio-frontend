import React from 'react';
import Scroll from 'react-scroll';
const { Link } = Scroll;

// Renders an individual navbar item and also acts as the
// controller by handling input (clicking the navbar item)
class NavBarItem extends React.Component {
  render() {
    return (
      <li>
        <Link
          activeClass='active'
          className={this.props.className}
          to={this.props.className}
          spy={true}
          smooth={true}
          duration={500}
          isDynamic={true}
        >
          {this.props.children}
        </Link>
      </li>
    );
  }
}

NavBarItem.propTypes = {
  url: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired,
  className: React.PropTypes.string
}

export default NavBarItem;
