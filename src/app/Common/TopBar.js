import React, {Component} from "react";
import {connect} from "react-redux";
import {
  Menu,
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {changeTab} from '../actions/index';

export class TopBar extends Component {
  render() {
    return(
  <Menu
  fixed={'top'}
  inverted
  size='large'
  style={{backgroundColor: '#030E10'}}
  >
  <Link to='/'>
    <Menu.Item
      name={this.props.currentActiveMenuItem}
      active={this.props.currentActiveMenuItem === 'home'}
      onClick={() =>this.props.changeTab('home')}
    >
      Home
    </Menu.Item>
    </Link>
    <Link to='/resume'>
    <Menu.Item
    name='resume'
    active={this.props.currentActiveMenuItem === 'resume'}
    onClick={() => this.props.changeTab('resume' )}
    >
      Resume
    </Menu.Item>
    </Link>
    <Link to='/portfolio'>
    <Menu.Item
    name='portfolio'
    active={this.props.currentActiveMenuItem === 'portfolio'}
    onClick={() => this.props.changeTab('portfolio' )}
    >
      Portfolio
    </Menu.Item>
    </Link>
    <Link to='/blog'>
    <Menu.Item
    name='blog'
    active={this.props.currentActiveMenuItem === 'blog'}
    onClick={() => this.props.changeTab('blog' )}
    >
      Blog
    </Menu.Item>
    </Link>
  </Menu>
)}
}

// Redux additions
const mapStateToProps = (state, ownProps) => ({
  currentActiveMenuItem: state.currentActiveMenuItem,
});

const mapDispatchToProps = {
  changeTab,
};
const TopBarContainer = connect(mapStateToProps, mapDispatchToProps)(TopBar);

export default TopBarContainer;
