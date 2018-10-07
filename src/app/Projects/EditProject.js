import React, { Component } from 'react';
import {
 Container, Grid, Button, Segment, Icon, Header, Form, Image
} from 'semantic-ui-react';
import { withAuth } from '@okta/okta-react';
import ProjectForm from './SubComponents/ProjectForm';
import ErrorScreen from './SubComponents/ErrorScreen';
import LoadingScreen from './SubComponents/LoadingScreen';

const axios = require('axios');


export default withAuth(class EditProj extends Component {
 constructor(props) {
   super(props);
   this.state ={
     project: undefined,
     loading: true,
   }
   this.checkAuthentication = this.checkAuthentication.bind(this);
   this.checkAuthentication();
   this.login = this.login.bind(this);
   this.logout = this.logout.bind(this)

     axios.get(`/api/projects/${this.props.match.params.id}`)
       .then((response) => {
         this.setState({project: response.data, loading: false})
       })
       .catch((response) =>  {
         this.setState({error: true, loading: false})
       })
 }

 async checkAuthentication() {
   const authenticated = await this.props.auth.isAuthenticated();
   if (authenticated !== this.state.authenticated) {
     this.setState({ authenticated });
   }
 }

 async login() {
   // Redirect to '/' after login
   this.props.auth.login(`/portfolio/edit/${this.props.match.params.id}`);
 }

 async logout() {
   // Redirect to '/' after logout
   this.props.auth.logout('/portfolio');
 }

 render() {
   if (this.state.authenticated === null) {this.login()}
   if(this.state.authenticated) {
       if(this.state.error) {
         return (
           <ErrorScreen message="Could not fetch project, sad :c" />
         );
       } else if(this.state.loading) {
         return(<LoadingScreen loadingMessage={"Loading project..."} />);
       }
       else {
         return (
           <ProjectForm headerMessage = {`Edit Project: ${this.state.project.name} `} isEditing = {true} project={this.state.project}/>
         );
       }
     } else {
       return (
         <Container textAlign='center' fluid style={{padding: '3em 0'}}>
           <Segment color={'blue'} inverted style={{height: '50vh'}}>
             <Header as='h1' content="Please log in to edit new project" />
             <Button onClick={this.login}>Login</Button>
           </Segment>
         </Container>
       )
     }
 }

});
