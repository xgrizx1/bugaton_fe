import React from 'react';
import Header from 'components/Header/Header';
import PropTypes from 'prop-types';
import Sidebar from 'components/Sidebar/Sidebar';

class DashboardEntry extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isDrawerOpen: false,
    };
    this.onRequestChange = this.onRequestChange.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  onRequestChange() {
    const currentState = this.state.isDrawerOpen;
    this.setState({ isDrawerOpen: !currentState });
  }

  onMenuItemClick(menuItem) {
    console.log(menuItem);
  }

  render() {
    return (
      <div>
        <Header onIconClick={this.onRequestChange} />
        <Sidebar
          isOpen={this.state.isDrawerOpen}
          onRequestChange={this.onRequestChange}
          handleMenuClick={this.onMenuItemClick}
        />
        {this.props.children}
      </div>
    );
  }
}

DashboardEntry.propTypes = {
  children: PropTypes.any,
};

export default DashboardEntry;
