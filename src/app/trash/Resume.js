/*
* Showcase my Resume
*/
import React from 'react';
import {
  Container, Header, Segment
} from 'semantic-ui-react'

const Resume = () => (
  <Container text style={{padding: '3em 0em'}}>
  <Segment >
    <Header as='h1' centered >
    My Resume
    </Header>
    </Segment>
  </Container>
);
export default Resume;
