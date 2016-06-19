import React from 'react';

import NavBarData from './NavBarData';
import NavBarItem from './NavBarItem';

// Renders the navbar items and also acts as the controller by handling
// navbar item clicks that are passed up by the NavBarItem class
export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: 0,
      navBarList: NavBarData.getNavBarList()
      // brand: NavBarData.getBrand()
    }
  }

  _updateItemSelection(itemId) {
    this.setState({selectedItem: itemId});
  }

  render() {
    // let brand = this.state.brand
    return(
      <nav className='group'>
        {/*<div className='brand'>
          <NavBarItem
            key = {brand.id}
            url = {brand.url}
            onClick = {this._updateItemSelection.bind(this, brand.id)}
            isSelected={(this.state.selectedItem === brand.id)}
          >
            {this.state.brand.text}
          </NavBarItem>
        </div>*/}
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
