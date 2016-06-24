import React from 'react';
import $ from 'jquery'

import NavBarData from './NavBarData';
import NavBarItem from './NavBarItem';

import './navbar.sass'

// Renders the navbar items and also acts as the controller by handling
// navbar item clicks that are passed up by the NavBarItem class
class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: 0,
      navBarList: NavBarData.getNavBarList()
    }
  }

  componentDidMount() {
    $(document).ready(function(){
      $(window).scroll(function() { // callback for scroll event
        if ($(document).scrollTop() > 0) { // check if user has scrolled more than 0 from top of the browser window (need to build on this code for transition animation)
          $('nav').css('background-color', 'black');
        } else {
          $('nav').css('background-color', 'black');
        }
      });
    });
  }

  _updateItemSelection(itemId) {
    this.setState({selectedItem: itemId});
  }

  navToggle() {
    document.getElementsByClassName('navbar-links')[0]
      .classList.toggle('responsive');
  }

  render() {
    return(
      <nav>
        <div className="icon">
          <a href='javascript:void(0);' onClick={this.navToggle}>&#9776;</a>
        </div>
        <div className='navbar-links'>
          <ul>
            {this.state.navBarList.map((item) =>
              <NavBarItem
                key = {item.id}
                url = {item.url}
                onClick = {this._updateItemSelection.bind(this, item.id)}
                isSelected={(this.state.selectedItem === item.id)}
              >
                {item.text}
              </NavBarItem>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar
