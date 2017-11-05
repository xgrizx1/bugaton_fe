import React from 'react';
import PropTypes from 'prop-types';
import PaymentSection from 'components/Payment/PaymentSection';
import './payment.scss';

class PaymentContainer extends React.Component {
  render() {
    return (
      <div style={{height: '100vh', background: '#F2F2F2'}}>
        <section className="container">
          <h1>Pricing Overview</h1>
          <div className="row white">
            <div className="block">
              <PaymentSection
                planName={'Ugly Duck - Basic'}
                color={'green'}
                planList={['1 Project', 'Limited AI', 'Limited Sensors', 'Up To 5 Ducks']}
                price={19.99}
              />
              <PaymentSection
                planName={'Duck - Regular'}
                color={'blue'}
                planList={['5 Projects', 'Full AI', 'Full Sensors', 'Up To 50 Ducks']}
                price={29.99}
              />
              <PaymentSection
                planName={'Swan - Enterprise'}
                color={'red'}
                planList={['Unlimited Projects', 'Unlimited Sensors and AI', 'Self hosted solution', 'Ulimited Ducks']}
                price={39.99}
              />
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
