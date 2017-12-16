import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

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

export default class Header extends Component {
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

  renderMenu() {
    // Replace with route objects later
    return (
      <Menu>
        <MenuItem primaryText="Profile" />
        <MenuItem primaryText="Workout History" />
        <MenuItem primaryText="Sign out" />
      </Menu>
    );
  }

  render() {
    return (
      <div>
        {this.renderAppBar()}
        {this.renderPopover()}
      </div>
    );
  }
}

