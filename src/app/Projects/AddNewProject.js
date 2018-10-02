 import React, { Component } from 'react';
 import {
  Container, Grid, Button, Segment, Icon, Header, Form, Image
 } from 'semantic-ui-react';
 import { withAuth } from '@okta/okta-react';
 import LoadingScreen from './SubComponents/LoadingScreen';
 import {
   loadProjectsIfNeeded,
   changeTab
 } from '../actions/index';
 import {connect} from "react-redux";
 import {areas, projectStatus} from './consts/ProjectConstants';
 import ProjectForm from './SubComponents/ProjectForm';
 import {
   primary_dark,
   primary_light,
   light_accent
 } from '../Common/ColorScheme';

export default withAuth(class AddNewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: null,
      showSuccessScreen: false,
      showLoadingScreen: false,
      loadingMessage: "" ,
      imageSrc: "",
      name: '',

    };
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
    this.props.auth.login('/portfolio/new');
  }

  async logout() {
    // Redirect to '/' after logout
    this.props.auth.logout('/projects');
  }

  showSuccessScreen = (bool) => this.setState({ showSuccessScreen: bool});

  render() {
    if (this.state.authenticated === null) {this.login}
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
        } else if(this.state.showLoadingScreen) {
          return(
            <LoadingScreen loadingMessage = {this.state.loadingMessage} />
          );
        } else {
          return (
            <ProjectForm headerMessage = {"Add new Project"}/>
          );
        }
      } else {
        return (
          <Container textAlign='center' fluid style={{padding: '3em 0', backgroundColor: primary_dark}}>
            <Segment color={'blue'} inverted style={{height: '50vh'}}>
              <Header as='h1' content="Please log in to add new project" />
              <Button onClick={this.login}>Login</Button>
            </Segment>
          </Container>
        )
      }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

addProject = (data) => {
  console.log("Cool: " , data.name)

}

});
