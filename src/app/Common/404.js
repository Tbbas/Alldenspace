import React from 'react';
import {
Container,
Segment,
Header
} from 'semantic-ui-react';

const NoPage = () =>  (
  <Container fluid textAlign='center' style={{padding: '3em 0em'}} >
    <Segment inverted style={{minHeight: 700}}>
      <Header as='h1' style={{paddingTop: '5em'}}>Sorry, that page does not exist <span>😔</span></Header>
    </Segment>
  </Container>

);

export default NoPage;
