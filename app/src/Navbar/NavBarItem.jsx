import React from 'react';

// Renders an individual navbar item and also acts as the
// controller by handling input (clicking the navbar item)
export default class NavBarItem extends React.Component {
  _handleItemClick() {
    this.props.onClick();
  }

  render() {
    return (
      <li className = {this.props.className}>
        <a
          href      = {this.props.url}
          onClick   = {this._handleItemClick.bind(this)}
        >
          {this.props.children}
        </a>
      </li>
    );
  }
}

NavBarItem.propTypes = {
  url: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  className: React.PropTypes.string
}
