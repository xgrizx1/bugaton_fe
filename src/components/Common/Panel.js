import React from 'react';
import PropTypes from 'prop-types';
import './panel.scss';

const CustomPanel = props => (
  <div className="panel">
    <div className={`panel-heading-${props.color}`}>{props.title}</div>
    <div className="panel-body">
      {props.children}
    </div>
  </div>
);

CustomPanel.propTypes = {
  title: PropTypes.string.required,
  children: PropTypes.any,
  color: PropTypes.string
};

CustomPanel.defaultProps = {
  color: 'blue'
};

export default CustomPanel;
