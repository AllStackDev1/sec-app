import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import TopNav from 'Containers/TopNav';

import dashboard from './dashboard';

const Dashboards = ({ match }) => (
  <div id="app-container" style={{ position: 'relative' }}>
    <TopNav />
    <main>
      <div className="container-fluid">
        <Switch>
          <Redirect exact from={`${match.url}`} to={`${match.url}/dashboard`} />
          <Route path={`${match.url}/dashboard`} component={dashboard} />
          <Redirect to="/error" />
        </Switch>
      </div>
    </main>
  </div>
);
export default Dashboards;
