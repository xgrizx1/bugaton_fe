import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {connect} from 'react-redux';
import {browserHistory} from "react-router";
import PropTypes from 'prop-types';
import './app.scss';

const muiTheme = getMuiTheme({});

class AppComponent extends Component {
  componentWillMount() {
    injectTapEventPlugin();

    /*
     const currentRoute = this.props.routes[this.props.routes.length - 1];
    if (currentRoute.path === "/dashboard") return;
    browserHistory.push('/payment');
    */
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}


AppComponent.propTypes = {
  children: PropTypes.any,
  routes: PropTypes.any
}

AppComponent.defaultProps = {};

export default connect(null)(AppComponent);
