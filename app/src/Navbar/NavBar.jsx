import React from 'react';
import $ from 'jquery'

import NavBarData from './NavBarData';
import NavBarItem from './NavBarItem';

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
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() >= 0) { // check if user scrolled more than 50 from top of the browser window
          $('nav').css('background-color', 'transparent'); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $('nav').css('background-color', '#262626'); // if not, change it back to transparent
        }
      });
    });
  }

  _updateItemSelection(itemId) {
    this.setState({selectedItem: itemId});
  }

  render() {
    return(
      <nav className='group'>
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
