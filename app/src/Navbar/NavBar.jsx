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
    }
  }

  _updateItemSelection(itemId) {
    this.setState({selectedItem: itemId});
  }

  render() {
    return(
      <div>
        <ul>
          {this.state.navBarList.map((item) =>
            <NavBarItem
              key = {item.id}
              url = {item.url}
              text = {item.text}
              onClick = {this._updateItemSelection.bind(this, item.id)}
              isSelected={(this.state.selectedItem === item.id)}
            />
          )}
        </ul>
      </div>
    );
  }
}
