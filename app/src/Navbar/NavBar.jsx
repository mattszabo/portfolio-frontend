import React, { PropTypes } from 'react';
import className from 'classname';

import NavBarData from './NavBarData';
import NavBarItem from './NavBarItem';

import './navbar.sass'

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      pushout: false,
      navBarList: NavBarData.getNavBarList(),
      isVisible: false
    }
  }
  pushoutToggle = () => {
    this.setState({
      pushout: !this.state.pushout
    })
    this.props.togglePushEffect();
  }

  render() {
    const navbarClass = className({
      'navbar-links': true,
      'pushout': this.state.pushout
    })
    return(
      <nav className='nav-bar'>
        <div className="icon">
          <a onClick={this.pushoutToggle}>&#9776;</a>
        </div>
        <div className={navbarClass}>
          <ul>
            {this.state.navBarList.map((item) => {
              const navbarListClass = className(
                'page'+item.id
              );
              return (
                <NavBarItem
                  key       = {item.id}
                  url       = {item.url}
                  className = {navbarListClass}
                  >
                  {item.text}
                </NavBarItem>
              )
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  togglePushEffect: PropTypes.func.isRequired
}

export default NavBar
