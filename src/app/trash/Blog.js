/*
* Hero Message for use as the top greeting on the website
*/
import React from 'react';
import {
  Container, Header, Segment, Grid
} from 'semantic-ui-react';
import {GridLoader} from 'react-spinners'
var posts = [];

var ghost = require('ghost-client')
var Client = ghost.createClient({
  endpoint: 'http://localhost:2368',
  clientId: 'ghost-frontend',
  clientSecret: 'f4b8c0392601'
})
Client.posts({}, function (err, posts1) {
  if (err) console.log(err)
  posts = posts1;
})
const Projects = () => (
  <Container textAlign='center' fluid style={{padding: '3em 0em'}}>
    <Segment inverted style={{minHeight: '100vh'}}>
      <Header as='h1' style={{marginTop: '3em',}}>This cat is under construction, please check back later</Header>
      <p> This page will eventually contain a blog </p>
      <Segment inverted style={{position: 'fixed', top: '40%', left:'40%'}}>
        <GridLoader color={'blue'} size={80}/>
        </Segment>
    </Segment>
  </Container>
);

export default Projects;
