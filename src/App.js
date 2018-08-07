import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Blog from './components/Blog';
import NoPage from './components/404'

import {
  Responsive,
  Visibility,
  Segment,
  Menu,
  Container,
  Sidebar,
  Icon,
  Button,
  Header,
} from 'semantic-ui-react';
import FadeIn from 'react-fade-in';
import Hero from './components/Hero'
import {
Route,
Link,
Switch
} from 'react-router-dom';




class DesktopMain extends Component {
  state = {
    currentActiveMenuItem: 'home'
  }
  handleClick = (e, {name}) => this.setState({currentActiveMenuItem: name});


  render() {
const {currentActiveMenuItem} = this.state
    return (
      <Menu
      fixed={'top'}
      inverted
      size='large'
      >
      <Link to='/'>
        <Menu.Item
          name='home'
          active={currentActiveMenuItem === 'home'}
          onClick={this.handleClick}
        >
          Home
        </Menu.Item>
        </Link>
        <Link to='/resume'>
        <Menu.Item
        name='resume'
        active={currentActiveMenuItem === 'resume'}
        onClick={this.handleClick}
        >
          Resume
        </Menu.Item>
        </Link>
        <Link to='/projects'>
        <Menu.Item
        name='projects'
        active={currentActiveMenuItem === 'projects'}
        onClick={this.handleClick}
        >
          Projects
        </Menu.Item>
        </Link>
        <Link to='/blog'>
        <Menu.Item
        name='blog'
        active={currentActiveMenuItem === 'blog'}
        onClick={this.handleClick}
        >
          Blog
        </Menu.Item>
        </Link>
      </Menu>
    );
  }
}


const ResponsiveContainer = ({children}) => (
  <div>
    <DesktopMain></DesktopMain>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Content = () => (
  <Container fluid>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/resume' component={Resume} />
    <Route path='/projects' component={Projects} />
    <Route path='/blog' component={Blog} />
    <Route path='/*' component={NoPage} />
  </Switch>
  </Container>
)

const App = () => (
  <div>
  <ResponsiveContainer />
  <Content />
  </div>
)

export default App;
