import React from 'react';
import './flag.scss';
import PropTypes from 'prop-types';

const BadMood = () =>
  <i style={{fontSize: '28px', color: 'red', paddingRight: '8px'}} className="material-icons">mood_bad</i>

const GoodMood = () =>
  <i style={{fontSize: '28px', color: 'green', paddingRight: '8px'}} className="material-icons">mood</i>

const Flag = ({type, title}) => {
  return (
    <div className={`flag-container-${type}`}>
      {
        type === "success" ? <GoodMood/> : <BadMood/>
      }
      <div className="flag-title"> {title} </div>
    </div>
  );
};

Flag.propTypes = {
  type: PropTypes.string,
  title: PropTypes.node
};

export default Flag;

