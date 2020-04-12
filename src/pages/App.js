import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import BasicLayout from '../layouts/BasicLayout';
import { BasicRoutes } from '../routes/menus';

import './App.css';

const formatRoutes = (parentPath, routes) =>
  // eslint-disable-next-line array-callback-return
  routes.map((route) => {
    if (route.redirect) {
      return (
        <Redirect
          key={`${parentPath}${route.path}`}
          exact
          from={`${parentPath}${route.path}`}
          to={`${parentPath}${route.redirect}`}
        />
      );
    }
    if (route.component) {
      return (
        <Route
          key={`${parentPath}${route.path}`}
          path={`${parentPath}${route.path}`}
          exact={route.exact}
          render={(routeProps) => <route.component {...routeProps} />}
        />
      );
    }
    if (route.routes && route.routes.length > 0) {
      return formatRoutes(`${parentPath}${route.path}`, route.routes);
    }
  });

function App() {
  return (
    <BasicLayout>
      <Switch>
        {formatRoutes('', BasicRoutes)}
        <Redirect to="/404" />
      </Switch>
    </BasicLayout>
  );
}

export default App;
