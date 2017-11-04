import React from 'react';
import PaymentContainer from 'components/Payment/PaymentContainer';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div>
        <PaymentContainer />
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
