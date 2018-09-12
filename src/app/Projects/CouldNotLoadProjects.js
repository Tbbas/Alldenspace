import React from 'react';
import {
  Grid,
  Header,
  Container,
  Segment
} from 'semantic-ui-react';

const CouldNotLoadProjects = () => (
  <Container fluid style={{padding: '3em 0em', height: '100vh'}}>
  <Segment
    inverted
    textAlign = 'center'
    color={'green'}
    style={{height: '100vh'}}
    >
  <Grid className='centered' style={{paddingTop: '3em'}}>
  <Grid.Row>
    <Header as='h1' inverted content='Spend less time accounting' />
    </Grid.Row>
    <Grid.Row>
    <Header as='h2' inverted contetn='SplitEasy'/>
    </Grid.Row>
    </Grid>
    </Segment>
  </Container>
);
export default CouldNotLoadProjects;
