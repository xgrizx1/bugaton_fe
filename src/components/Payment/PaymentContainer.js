import React from 'react';
import PropTypes from 'prop-types';
import PaymentSection from 'components/Payment/PaymentSection';
import './payment.scss';

class PaymentContainer extends React.Component {
  render() {
    return (
      <div style={{background: '#F2F2F2'}}>
        <section className="container">
          <h1>Pricing Overview</h1>
          <div className="row white">
            <div className="block">
              <PaymentSection planName={'Basic'} color={'green'}/>
              <PaymentSection planName={'Medium'} color={'blue'}/>
              <PaymentSection planName={'Hard'} color={'yel'}/>
              <PaymentSection planName={'HardCore!'} color={'red'}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

PaymentContainer.propTypes = {};

PaymentContainer.defaultProps = {};

export default PaymentContainer;
