import React from 'react';
import {
  Grid,
  Header,
  Container,
  Segment,
  Icon
} from 'semantic-ui-react';

const CouldNotLoadProjects = ({error}) => {
  if(error) {
    return (
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
    )
  } else {
    return (
      <Container fluid style={{padding: '3em 0em'}}>
      <Segment
        inverted
        textAlign = 'center'
        color={'blue'}
        style={{height: '100vh'}}
        >
      <Grid className='centered' style={{paddingTop: '10em'}}>
      <Grid.Row>
        <Header as='h1' inverted content='Could not find any projects on the server. ' />
        </Grid.Row>
        <Grid.Row>
        <p>This is most likely due to them being added or something else, please return later</p>
        </Grid.Row>
        <Grid.Row>
        <h1><Icon name='clock outline' /></h1>
        </Grid.Row>
        </Grid>
        </Segment>
      </Container>
    )
  }

}
export default CouldNotLoadProjects;
