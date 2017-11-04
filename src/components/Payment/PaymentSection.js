import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';

const PaymentSection = ({color, planName, planList, price}) =>
  <div className="col-xs-12 col-sm-6 col-md-3">
    <ul className={`pricing p-${color}`} style={{backgroundColor: 'white'}}>
      <li className={`pricing-header-${color}`}>
        <h1>{planName}</h1>
      </li>
      {planList.map(
        (plan, i) => <li key={i}>{plan}</li>
      )}
      <li>
        <h3>${price}</h3>
        <span>per month</span>
      </li>
      <li>
        <button onClick={() => browserHistory.push('/dashboard')}>Join Now</button>
      </li>
    </ul>
  </div>;

PaymentSection.propTypes = {
  color: PropTypes.string,
  planList: PropTypes.array,
  planName: PropTypes.string,
  price: PropTypes.number
};

PaymentSection.defaultProps = {
  planList: [
    'Responsive Design', 'Color Customization', 'HTML5 & CSS3', 'Styled Elements'
  ],
  planName: 'Basic',
  price: 799
};

export default PaymentSection;
