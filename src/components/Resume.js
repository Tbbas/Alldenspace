/*
* Showcase my Resume
*/
import React from 'react';
import {
  Container, Header, Segment
} from 'semantic-ui-react'
import { Document } from 'react-pdf/dist/entry.webpack';

const Resume = () => (
  <Container text style={{padding: '3em 0em'}}>
  <Segment >
    <Header as='h1' centered >
    My Resume
    </Header>
      <Document file="Allden_Resume.pdf" />
    </Segment>
  </Container>
);
export default Resume;
