import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.scss';
import {browserHistory} from 'react-router';

const SidebarHeader = () => (
  <div className="sidebar-header">
    <div className="image-padding">
      <div>
        <strong>DevDuck v1.0</strong>
      </div>
      <img width={40} src="../../images/rubber_duck.jpg"/>
    </div>
  </div>
);

const ducks = {
  1: 'Duck 1',
  2: 'Duck 2',
  3: 'Duck 3',
  4: 'Duck 4',
};

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.prepareDucks = this.prepareDucks.bind(this);
  }

  prepareDucks() {
    let output = [];
    for (const i of Object.keys(ducks)) {
      output.push(
        <MenuItem
          style={{minWidth: '200px'}}
          primaryText={ducks[i]}
          key={i}
          onClick={() => browserHistory.push(`/duck/${i}`)}
        />
      );
    }
    return output;
  }


  render() {
    const {onRequestChange, isOpen, handleMenuClick} = this.props;
    return (
      <Drawer docked={false} width={300} open={isOpen} onRequestChange={onRequestChange}>
        <SidebarHeader/>
        <MenuItem onClick={() => browserHistory.push('/dashboard')}>Dashboard</MenuItem>
        <MenuItem onClick={() => browserHistory.push('/employees')}>Employees</MenuItem>
        <MenuItem
          menuItems={this.prepareDucks()}
        >
          Ducks
        </MenuItem>
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestChange: PropTypes.func.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};

export default Sidebar;
