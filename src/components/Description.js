/*
*  Description about me
*/

import React from 'react';
import {
  Container,
  Divider,Image,Grid
} from 'semantic-ui-react'


const Description = ({ mobile }) => (
  <Container text>
  <Divider horizontal>About Me</Divider>
    <p
    style={{
        marginBottom: 0,
        color: 'black',
        lineHeight: 1.5,
        letterSpacing: 1.2,
        fontSize: '1.1em',
      }}>
      My name is Tobias Alldén, I'm a 23 year old student from Chalmers University of Technology in Gothenburg, Sweden.
      I am a developer with knowledge in several languages such as <span style={{fontWeight: 'bold'}}>Java, C#, Javascript, PHP</span> and several others. I am currently pursuing a Masters Degree in Software Engineering after completing a bachelor in applied software engineering. I am expected to finish my education in June 2019 and is such open for suggestions from potential employers. If this sounds interesting, please check out my <a href="#">Resume!</a></p>
      </Container>
)

export default Description;
