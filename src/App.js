import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from './app/Home/Home';
import Resume from './app/Resume/Resume';
import ViewProject from './app/Projects/ViewProject';
import NoPage from './app/Common/404'
import Projects from './app/Projects/Projects';
import TopBarContainer from './app/Common/TopBar';
import AddNewProject from './app/Projects/AddNewProject';
import EditProject from './app/Projects/EditProject';
import {
  Container,
} from 'semantic-ui-react';
import {
Route,
Switch
} from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';


const Content = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/resume' component={Resume} />
    <Route exact path='/portfolio' component={Projects} />
    <Route exact path='/portfolio/new' component={AddNewProject} />
    <Route path='/portfolio/edit/:id' component={EditProject} />
    <Route path='/portfolio/:id' component={ViewProject} />
    <Route path='/implicit/callback' component={ImplicitCallback}/>
    <Route path='/*' component={NoPage} />
  </Switch>
)

const App = () => (
  <div>
  <TopBarContainer />
  <Content/>
  </div>
)

export default App;
