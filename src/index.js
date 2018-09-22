import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import configureStore from './store/configureStore';
import App from './containers/App';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

const history = createHistory();

let state = window.__INITIAL_STATE__;
const store = configureStore(history, state);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path='*' component={App} />
        </Switch>
      </ConnectedRouter>
    </Router>
  </Provider>,
  document.getElementById('root')
);
