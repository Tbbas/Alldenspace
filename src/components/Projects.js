/*
* Hero Message for use as the top greeting on the website
*/
import React from 'react';
import {
  Container, Header, Segment, Grid
} from 'semantic-ui-react';
import {GridLoader} from 'react-spinners'

const Projects = () => (
  <Container textAlign='center' fluid style={{padding: '3em 0em'}}>
    <Segment inverted style={{minHeight: 700}}>
      <Header as='h1' style={{marginTop: '3em',}}>This page is under construction, please check back later</Header>
<Grid columns='equal'>
<Grid.Column></Grid.Column>
<Grid.Column>
        <GridLoader color={'purple'} size={80}/>
        </Grid.Column>

    <Grid.Column></Grid.Column>

    </Grid>
    </Segment>

  </Container>
);

export default Projects;
