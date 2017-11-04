import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import './app.css';
import PaymentContainer from "components/Payment/PaymentContainer";

class AppComponent extends Component {
  componentWillMount() {
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default connect(null)(AppComponent);
