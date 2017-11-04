import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.scss';

const SidebarHeader = () =>
  <div className="sidebar-header">
    <div className="image-padding">
      <div><strong>DevDuck v1.0</strong></div>
      <img width={40} src="../../images/rubber_duck.jpg" />
    </div>
  </div>


class Sidebar extends React.Component {
  render() {
    const {onRequestChange, isOpen, handleMenuClick} = this.props;
    return (
      <Drawer
        docked={false}
        width={200}
        open={isOpen}
        onRequestChange={onRequestChange}
      >
        <SidebarHeader/>
        <MenuItem onClick={handleMenuClick}>Menu Item</MenuItem>
        <MenuItem onClick={handleMenuClick}>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestChange: PropTypes.func.isRequired,
  handleMenuClick: PropTypes.func.isRequired
};

export default Sidebar;
