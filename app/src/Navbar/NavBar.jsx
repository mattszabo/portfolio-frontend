import React, { PropTypes } from 'react';
// import $ from 'jquery';
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
      pushout: false,
      navBarList: NavBarData.getNavBarList(),
      isVisible: false
    }
  }
  componentWillMount() {
    // $(window).scroll(function() { // callback for scroll event
    //   var distance = $(window).height() - 1,
    //   $window = $(window);
    //   if ( $window.scrollTop() >= distance ) {
    //     $('.nav-bar').css('position', 'fixed');
    //     $('.nav-bar').css('margin-top', '0');
    //   } else {
    //     $('.nav-bar').css('position', 'absolute');
    //     $('.nav-bar').css('margin-top', '100vh');
    //   }
    // });
  }
  pushoutToggle = () => {
    this.setState({
      pushout: !this.state.pushout
    })
    this.props.togglePushEffect();
  }

  render() {
    const _class = className({
      'navbar-links': true,
      'pushout': this.state.pushout
    })
    return(
      <nav className='nav-bar'>
        <div className="icon">
          <a onClick={this.pushoutToggle}>&#9776;</a>
        </div>
        <div className={_class}>
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

NavBar.propTypes = {
  togglePushEffect: PropTypes.func.isRequired
}

export default NavBar
