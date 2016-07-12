import React from 'react';
import $ from 'jquery'
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
      selectedItem: 1,
      dropdown: false,
      navBarList: NavBarData.getNavBarList()
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleNavClick);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleNavClick);
  }
  handleNavClick = (e) => {
    e.preventDefault();
    $(window).scroll(function() { // callback for scroll event
      var distance = $(window).height() - 1,
      $window = $(window);
      if ( $window.scrollTop() >= distance ) {
        $('.nav-bar').css('position', 'fixed');
        $('.nav-bar').css('margin-top', '0');
      } else {
        $('.nav-bar').css('position', 'absolute');
        $('.nav-bar').css('margin-top', '100vh');
      }
    });
  }

  _updateItemSelection(itemId) {
    if(itemId === 0){
      this.setState({
        dropdown: false
      })
    } else {
      this.setState({
        selectedItem: itemId
      });
    }
  }

  navToggle = () => {
    this.setState({
      dropdown: !this.state.dropdown
    })
  }

  render() {
    const _class = className({
      'nav-bar': true,
      'dropdown': this.state.dropdown
    })
    console.log(_class);
    return(
      <nav className={_class}>
        <div className="icon">
          <a onClick={this.navToggle}>&#9776;</a>
        </div>
        <div className='navbar-links'>
          <ul>
            {this.state.navBarList.map((item) => {
              const _class = className({
                active: this.state.selectedItem === item.id
              })
              return (
                <NavBarItem
                  key = {item.id}
                  url = {item.url}
                  onClick = {this._updateItemSelection.bind(this, item.id)}
                  className={_class}
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
