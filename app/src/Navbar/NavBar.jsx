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
      selectedItem: 1,
      navBarList: NavBarData.getNavBarList()
    }
  }

  componentDidMount() {
    $(document).ready(function(){
      $(window).scroll(function() { // callback for scroll event
        var distance = $('#about').offset().top,
        $window = $(window);
        if ( $window.scrollTop() >= distance ) {
          $('.nav-bar').css('position', 'fixed');
          $('.nav-bar').css('margin-top', '0');
        } else {
          $('.nav-bar').css('position', 'absolute');
          $('.nav-bar').css('margin-top', '100vh');
        }
      });
    });
  }

  _updateItemSelection(itemId) {
    this.setState({selectedItem: itemId});
  }

  navToggle() {
    document.getElementsByClassName('nav-bar')[0]
      .classList.toggle('dropdown');
  }

  render() {
    return(
      <nav className='nav-bar'>
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
