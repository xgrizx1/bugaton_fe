import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import PaymentContainer from 'components/Payment/PaymentContainer';
import DashboardContainer from 'components/Dashboard/DashboardContainer';
import App from './components/App';
import configureStore from './stores';
import DashboardEntry from "components/Dashboard/DashboardEntry";

const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router
        history={browserHistory}
        onUpdate={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Route path="/" component={App}>
          <Route path="/payment" component={PaymentContainer}/>
          <Route component={DashboardEntry}>
            <Route path="/dashboard" component={DashboardContainer}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default; // eslint-disable-line global-require

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp/>
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
