import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import PaymentContainer from 'components/Payment/PaymentContainer';
import DashboardContainer from 'components/Dashboard/DashboardContainer';
import DashboardEntry from 'components/Dashboard/DashboardEntry';
import Duck from 'components/Duck/Duck';
import Employee from "components/Employee/Employee";
import Error from 'components/ErrorPage/Error';
import configureStore from './stores';
import App from './components/App';

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
          <IndexRoute component={PaymentContainer} />
          <Route path="/payment" component={PaymentContainer}/>
          <Route component={DashboardEntry}>
            <Route path="/dashboard" component={DashboardContainer}/>
            <Route path="/duck/:id" component={Duck}/>
            <Route path="/employees" component={Employee} />
          </Route>
          <Route path="*" component={Error} />
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
