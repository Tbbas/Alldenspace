/*
* Hero Message for use as the top greeting on the website
*/
import React from 'react';
import Typing from 'react-typing-animation';
import FadeIn from 'react-fade-in';
import PropTypes from 'prop-types';
import {
  Container, Header
} from 'semantic-ui-react'

const Hero = ({mobile}) => (
  <Container text>
  <Typing speed={80}>
  <Header as='h1' inverted style={{fontSize: mobile ? '2em' : '4em', fontWeight: 'bold', marginBottom : 0, marginTop: mobile ? '1.5em' : '3em',}} >
      Hello, World!
    </Header>
      <Typing.Delay ms={100} />
      <p className="headerSub" style={{top: 0, color: 'dimgray',  fontSize: mobile ? '1em' : '2em'}}> My name is: <span style={{fontWeight: 'bold', color:'#2196f3'}}> Tobias Alldén</span></p>
      </Typing>
      <FadeIn delay={4000} transitionDuration={2000}>
      <p className="headerSub" style={{top: 0, color: 'dimgray', fontSize: mobile ? '0.7em' : '1.4em'}}>I'm a Software Engineer from Sweden <span role="img">🇸🇪</span></p>
      </FadeIn>
  </Container>
);

Hero.propTypes = {
  mobile: PropTypes.bool,
}

export default Hero;
