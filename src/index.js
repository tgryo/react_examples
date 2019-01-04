import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import configureStore from './store/configureStore';

import Routes from './routes/routes';

const history = createHistory();
const theme = createMuiTheme();

let state = window.__INITIAL_STATE__;
const store = configureStore(history, state);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
