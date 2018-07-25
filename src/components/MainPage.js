import React, { Component } from 'react';
import Hero from './Hero';
import Description from './Description';
import PropTypes from 'prop-types';
import ScrollableAnchor from 'react-scrollable-anchor'
import {
  Responsive,
  Visibility,
  Segment,
  Menu,
  Container,
  Sidebar,
  Icon,
  Button
} from 'semantic-ui-react';




import '../css/MainPage.css';



class DesktopMain extends Component {
  state ={
    displayMenu: false,
  }
  showMenu = () => this.setState({displayMenu: true});
  hideMenu = () => this.setState({displayMenu: false});

  render() {
    const { children } = this.props
    const { displayMenu } = this.state
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showMenu}
          onBottomPassedReverse={this.hideMenu}
          >
          <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em'}}
          vertical
        >
          <Menu
            fixed={displayMenu ? 'top' : null}
            inverted={!displayMenu}
            pointing={!displayMenu}
            secondary={!displayMenu}
            size='large'
          >
            <Container>
              <Menu.Item as='a' active>
                Home
              </Menu.Item>
              <Menu.Item as='a'>Resume</Menu.Item>
              <Menu.Item as='a'>Blog</Menu.Item>
            </Container>
          </Menu>
          <Hero />
        </Segment>
      </Visibility>
      {children}
      </Responsive>
    );
  }
}
DesktopMain.propTypes = {
  children: PropTypes.node,
}

class MobileMain extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Resume</Menu.Item>
            <Menu.Item as='a'>Blog</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              </Container>
              <Hero mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileMain.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopMain>{children}</DesktopMain>
    <MobileMain>{children}</MobileMain>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const MainPage = () => (
  <ResponsiveContainer>
     <Segment style={{ padding: '3em 0em' }} vertical>
     <ScrollableAnchor id={'section1'}>
        <Description />
        </ScrollableAnchor>
    </Segment>
  </ResponsiveContainer>
)

export default MainPage;
