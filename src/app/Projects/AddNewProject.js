 import React, { Component } from 'react';
 import {
  Container, Grid, Button, Segment, Icon, Header
 } from 'semantic-ui-react';
 import { withAuth } from '@okta/okta-react';

export default withAuth(class AddNewProject extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null, showSuccessScreen: false };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async login() {
    // Redirect to '/' after login
    this.props.auth.login('/projects/new');
  }

  async logout() {
    // Redirect to '/' after logout
    this.props.auth.logout('/projects');
  }

  showSuccessScreen = (bool) => this.setState({ showSuccessScreen: bool});

  render() {
    if (this.state.authenticated === null) return null;
    if(this.state.authenticated) {
        if(this.state.showSuccessScreen) {
          return (
            <Container textAlign='center' fluid style={{margin: '3em'}}>
            <Segment color={'green'} inverted>
            <h1>Success!</h1>
            <Button onClick={this.showSuccessScreen}><Icon name='plus'/></Button>
            </Segment>
            </Container>
          );
        } else {
          return (
            <Container text>
            <p>Form</p>
            <Button onClick={this.showSuccessScreen}><Icon name='plus'/></Button>
            </Container>
          );
        }
      } else {
        return (
          <Container textAlign='center' fluid style={{padding: '3em 0'}}>
            <Segment color={'blue'} inverted style={{height: '50vh'}}>
              <Header as='h1' content="Please log in to add new project" />
              <Button onClick={this.login}>Login</Button>
            </Segment>
          </Container>


        )
      }
  }


  submitArticle = () => {
    // Submit
    this.setState({showSuccessScreen: !this.state.showSuccessScreen});
  }

});
