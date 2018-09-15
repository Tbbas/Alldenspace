import React from 'react';
import {
  Grid,
  Header,
  Container,
  Segment,
  Icon
} from 'semantic-ui-react';

const CouldNotLoadProjects = () => (
  <Container fluid style={{padding: '3em 0em'}}>
  <Segment
    inverted
    textAlign = 'center'
    color={'red'}
    style={{height: '50vh'}}
    >
  <Grid className='centered' style={{paddingTop: '3em'}}>
  <Grid.Row>
    <Header as='h1' inverted content='Could not load projects' />
    </Grid.Row>
    <Grid.Row>
    <Header as='h1' inverted>😔</Header>
    </Grid.Row>
    </Grid>
    </Segment>
  </Container>
);
export default CouldNotLoadProjects;
