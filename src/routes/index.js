import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from '../pages/App';
import { commonRoutes } from './menus';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/web"  exact render={(routeProps) => <App {...routeProps} />}/>
      {commonRoutes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect exact from="/" to="/web" />
      <Redirect to="/404" />
    </Switch>
  </Router>
)


export default AppRouter;
