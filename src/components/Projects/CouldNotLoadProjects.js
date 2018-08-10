import React from 'react';
import {
  Grid,
  Header,
  Container,
  Segment
} from 'semantic-ui-react';

const CouldNotLoadProjects = () => (
  <Container fluid style={{padding: '3em 0em'}}>
  <Segment
    inverted
    textAlign = 'center'
    color={'blue'}
    style={{minHeight: 350}}
    >
  <Grid className='centered' style={{paddingTop: '3em'}}>
  <Grid.Row>
    <Header as='h1' inverted content='Could not fetch projects, please try again later...' />
    </Grid.Row>
    <Grid.Row>
    <span style={{fontSize:68, paddingTop: '1em'}}>😞</span>
    </Grid.Row>
    </Grid>
    </Segment>
  </Container>
);
export default CouldNotLoadProjects;
