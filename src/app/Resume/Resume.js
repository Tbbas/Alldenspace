/*
* Showcase my Resume
*/
import React from 'react';
import {
  Container, Header, Segment
} from 'semantic-ui-react'
import {
  primary_dark
} from '../Common/ColorScheme';

const Resume = () => (
  <Container fluid style={{padding: '3em 0em', backgroundColor: primary_dark, height: '100vh'}}>
  <Container text textAlign="center" >
  <Segment>
    <Header as='h1' centered >
    My Resume
    </Header>
    </Segment>
    </Container>
  </Container>
);
export default Resume;
