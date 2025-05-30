import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from 'browserHistory';
import Project from 'Project';
import Authenticate from 'Auth/Authenticate';
import PageError from 'shared/components/PageError';
import Board from 'Project/Board';
import ProjectSettings from 'Project/ProjectSettings';
import Dashboard from 'Dashboard';
import CreateProject from 'CreateProject';
import NavbarLeft from 'Navbar';
import LoginForm from 'LoginPage/Login';

const Routes = () => (
  <Router history={history}>
    <Route path ="/login" component={LoginForm}/>
    <NavbarLeft></NavbarLeft>
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      {/* <Route path="/authenticate" component={Authenticate} /> */}
      <Route path="/dashboard/create" component={CreateProject} />
      <Route path="/dashboard/project" component={Project} />
      <Route path="/dashboard" component={Dashboard} />
      
      

      {/* Sub-routes for project first */}
      {/* <Route path="/project/board" component={Board} /> */}
      {/* <Route path="/project/settings" component={ProjectSettings} /> */}

      {/* Generic “project” landing page last */}
      {/* <Route exact path="/project" component={Project} /> */}

      <Route component={PageError} />
    </Switch>

  </Router>
);

export default Routes;
