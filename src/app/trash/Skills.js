/*
*  My Programming and scripting skillsskills
*/

import React from 'react';
import {
  Container,
  Divider,Grid, Popup, Button, Segment, Header
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Description = ({ mobile }) => (
  <Segment inverted style={{ padding: '-3em 0em', borderBottom: 0}} >
  <Container text>
    <Divider horizontal style={{color: 'white'}}>My skills</Divider>
    <Grid centered={true}>
      <Grid.Row style={{paddingBottom: '1em'}} >
      <Grid.Column float='right'>
      <Segment textAlign='center' style={{paddingTop: 0, paddingBottom: 0}} inverted>
        <Popup trigger={<Button basic color='red' content='Java' />} content='Java is the language that I am most proficient in as it have been the main language used througout my education' />
        <Popup trigger={<Button basic color='blue' content='C#' />} content='Given that Java and C# are very simular and that I wrote my bachelors thesis project in C#. I am also proficient in this language' />
        <Popup trigger={<Button basic color='green' content='C++' />} content='My most recent summer job position consisted of working with code written in C++' />
        <Popup trigger={<Button basic color='purple' content='PHP' />} content='Worked a lot with PHP during my time as a web consultant' />
        </Segment>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{paddingTop: 0, paddingBottom: 0}}>
      <Grid.Column float='right'>
      <Segment textAlign='center' style={{paddingTop: 0, paddingBottom: 0}} inverted >
        <Popup trigger={<Button basic color='pink' content='Javascript' />} content='I have done several websites and hobby projects in Javascript (for example this website)' />
        <Popup trigger={<Button basic color='orange' content='HTML/CSS' />} content='Cannot create a website without these' />
        </Segment>
      </Grid.Column>
      </Grid.Row>
    </Grid>
    <Header as='h5' inverted textAlign='center'>
      To see some of the projects I have done, please check out the <Link to="/Projects"><a href="#"> Projects </a> </Link>section of this page.
      </Header>
  </Container>
  </Segment>
)

export default Description;
