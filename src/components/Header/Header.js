import PropTypes from 'prop-types';
import React from 'react';
import './header.scss';

class Header extends React.PureComponent {
  render() {
    return (
      <div className="main-header">
        <div className="main-header-flex">
          <div className="header-flex">
            <i onClick={this.props.onIconClick} className="material-icons">
              menu
            </i>
            <div className="header-title">Dev-Duck</div>
            <div> – </div>
            <div className="header-page">Dashboard</div>
          </div>
          <div className="duck-container">
            <span color={'white'} style={{ paddingRight: '10px' }}>
              DevDuck
            </span>
            <img width={40} src="../../images/ducky.png" />
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  onIconClick: PropTypes.func,
};
export default Header;
