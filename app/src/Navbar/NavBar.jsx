import React from 'react';
import className from 'classname';

import NavBarData from './NavBarData';
import NavBarItem from './NavBarItem';

import './navbar.sass'

// Renders the navbar items and also acts as the controller by handling
// navbar item clicks that are passed up by the NavBarItem class
class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdown: false,
      navBarList: NavBarData.getNavBarList(),
      isVisible: false
    }
  }

  dropdownToggle = () => {
    this.setState({
      dropdown: !this.state.dropdown
    })
  }

  render() {
    const _class = className({
      'nav-bar': true,
      'dropdown': this.state.dropdown,
      'visible': this.state.isVisible
    })

    return(
      <nav className={_class}>
        <div className="icon">
          <a onClick={this.dropdownToggle}>&#9776;</a>
        </div>
        <div className='navbar-links'>
          <ul>
            {this.state.navBarList.map((item) => {
              const _class = className(
                'page'+item.id
              );
              return (
                <NavBarItem
                  key       = {item.id}
                  url       = {item.url}
                  className = {_class}
                  >
                  {item.text}
                </NavBarItem>
              )
            }
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar
