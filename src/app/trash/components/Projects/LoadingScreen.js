import React from 'react';
import {
  Grid, Header,Container, Segment
} from 'semantic-ui-react';
import {BounceLoader} from 'react-spinners';

const LoadingScreen = () => (
  <Container fluid style={{padding: '3em 0em'}}>
  <Segment
  inverted
  color={'blue'}
  style={{ minHeight: 350}}
  >
  <Grid className="centered"
      vertical
      >
  <Grid.Row>
    <Header as='h1' inverted style={{paddingTop: '3em'}} content='Projects are loading...' />
    </Grid.Row>
    <Grid.Row>
    <BounceLoader color={'white'} size={100}/>
    </Grid.Row>
    </Grid>
    </Segment>
  </Container>
);

export default LoadingScreen;
