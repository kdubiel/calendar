import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Calendar, DayDetails } from 'pages';
import { MainLayout } from 'layouts';

const Routes: React.FC = () => (
  <MainLayout>
    <Switch>
      <Route exact path="/calendar" component={Calendar} />
      <Route path="/calendar/:date" component={DayDetails} />
      <Redirect from="/" to="/calendar" />
    </Switch>
  </MainLayout>
);

export default Routes;
