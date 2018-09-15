import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from './components/Home';
import Resume from './components/Resume';
import ViewProject from './app/Projects/ViewProject';
import Blog from './components/Blog';
import NoPage from './components/404'
import Projects from './app/Projects/Projects';
import TopBarContainer from './app/Common/TopBar';
import {
  Container,
} from 'semantic-ui-react';
import FadeIn from 'react-fade-in';
import Hero from './components/Hero'
import {
Route,
Switch
} from 'react-router-dom';

const Content = () => (
  <Container fluid>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/resume' component={Resume} />
    <Route exact path='/projects' component={Projects} />
    <Route path='/projects/:id' component={ViewProject} />
    <Route path='/blog' component={Blog} />
    <Route path='/*' component={NoPage} />
  </Switch>
  </Container>
)

const App = () => (
  <div>
  <TopBarContainer />
  <Content />
  </div>
)

export default App;
