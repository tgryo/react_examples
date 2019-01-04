import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import dashboardIndexRoutes from './dashboardIndexRoutes';
import App from '../containers/App';
import Login from '../containers/Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={Login} />
      {dashboardIndexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  );
};
export default Routes;
