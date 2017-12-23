import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const dropdownMenuItemContent = [
  {
    primaryText: 'Home',
    value: 'home',
    path: 'home',
  },
  {
    primaryText: 'Profile',
    value: 'profile',
    path: 'profile',
  },
  {
    primaryText: 'Sign Out',
    value: 'signOut',
    path: 'signOut',
  },
];

const popoverDefaultProps = {
  anchorOrigin: {
    horizontal: 'left',
    vertical: 'bottom',
  },
  targetOrigin: {
    horizontal: 'left',
    vertical: 'top',
  },
};

export default class HeaderLayout extends Component {
  state = {
    isPopoverOpen: false,
    popoverAnchorEl: null,
  }

  openPopoverMenu = (event) => {
    event.preventDefault();

    this.setState({
      isPopoverOpen: true,
      popoverAnchorEl: event.currentTarget,
    });
  };

  closePopoverMenu = () => this.setState({ isPopoverOpen: false });

  renderAppBar() {
    return (
      <AppBar
        title="Beyond 5/3/1"
        onLeftIconButtonClick={this.openPopoverMenu}
      />
    );
  }

  renderPopover() {
    const {
      isPopoverOpen,
      popoverAnchorEl,
    } = this.state;

    const popoverProps = {
      ...popoverDefaultProps,
      anchorEl: popoverAnchorEl,
      open: isPopoverOpen,
      onRequestClose: this.closePopoverMenu,
    };

    return (
      <Popover {...popoverProps}>
        {this.renderMenu()}
      </Popover>
    );
  }

  routeTo = path => this.props.history.push(path);

  renderMenu() {
    const routeOnClick = (event, menuItem) => {
      event.preventDefault();
      const path = menuItem.props.value;

      this.routeTo(path);
    };

    return (
      <Menu
        onItemClick={routeOnClick}
      >
        {dropdownMenuItemContent.map(menuItem => <MenuItem {...menuItem} />)}
      </Menu>
    );
  }

  render() {
    return (
      <div>
        {this.renderAppBar()}
        {this.renderPopover()}
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

HeaderLayout.propTypes = {

};
