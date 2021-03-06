/*
*  Description about me
*/

import React from 'react';
import {
  Container,
  Divider,
  Image,
  Segment,
  Grid,
  Header
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {
  primary_dark,
  primary_light,
  light_accent
} from '../Common/ColorScheme';
import {home} from './home.css';



const Description = ({ mobile }) => (
  <Segment style={{padding: '3em 0em', backgroundColor: primary_light}}>
  <Container>
  <Header as='h1' textAlign="center" style={{color: light_accent, marginBottom: '2em'}} content="About Me" />
  <Grid columns='equal' stackable>
  <Grid.Row>
  <Grid.Column>
  <p style={{
      marginBottom: 0,
      color: 'black',
      lineHeight: 1.5,
      letterSpacing: 1.2,
      fontSize: mobile ? '0.8em' : '1.1em',
    }}>Hello There!</p>
    <p
    style={{
        marginBottom: 0,
        color: 'black',
        lineHeight: 1.5,
        letterSpacing: 1.2,
        fontSize: mobile ? '0.8em' : '1.1em',
      }}>
      My name is Tobias Alldén, I am a 23 year old student from Chalmers University of Technology in Gothenburg, Sweden.
      I am currently pursuing a Masters Degree in Software Engineering after completing a bachelor in applied software engineering.
      I am a very driven individual that always strive to become the best engineer possible, this includes trying out different new technologies, attending hackathons,
      doing various hobby projects and much more.
      I am expected to graduate  in June 2019 and is such open for suggestions from potential employers.
      If this sounds interesting, please check out my <Link to="/Resume"><a href="#">Resume!</a></Link>
      or <a href="mailto:alldentobias@gmail.com">get in touch</a>!
      </p>
      </Grid.Column>
      <Grid.Column>
      <Image centered src='/tobiasallden.jpg' size='medium' circular />
      </Grid.Column>
      </Grid.Row>
      </Grid>
      </Container>
      </Segment>
)

export default Description;
