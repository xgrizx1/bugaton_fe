import React from 'react';
import Header from 'components/Header/Header';
import PropTypes from 'prop-types';
import Sidebar from 'components/Sidebar/Sidebar';
import firebase from '../../config/database';


class DashboardEntry extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isDrawerOpen: false
    };
    this.onRequestChange = this.onRequestChange.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  componentWillMount() {
  }

  onRequestChange() {
    const currentState = this.state.isDrawerOpen;
    this.setState({isDrawerOpen: !currentState});
  }

  onMenuItemClick(menuItem) {
  }

  render() {
    return (
      <div>
        <Header onIconClick={this.onRequestChange}/>
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
