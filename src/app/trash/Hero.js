/*
* Hero Message for use as the top greeting on the website
*/
import React from 'react';
import Typing from 'react-typing-animation';
import FadeIn from 'react-fade-in';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import scrollToComponent from 'react-scroll-to-component';
import {
  Container, Header, Segment
} from 'semantic-ui-react'

const Hero = ({mobile}) => (
  <Segment
    inverted
    textAlign='center'
    style={{ minHeight: '10vh', background:"https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
    vertical
  >
  <Typist avgTypingDelay={80} cursor={{show: false,}}>
  <Header as='h1'
  inverted
  style={{fontSize: mobile ? '2em' : '4em', fontWeight: 'bold', marginBottom : 0, marginTop: mobile ? '1.5em' : '3em',}} >
      Hello, World!
    </Header>
      <p className="headerSub" style={{top: 0, color: 'dimgray',  fontSize: mobile ? '1em' : '2em'}}> My name is: <span style={{fontWeight: 'bold', color:'#2196f3'}}> Tobias Alldén</span></p>
      </Typist>
      <FadeIn delay={4000} transitionDuration={2000}>
      <p className="headerSub" style={{top: 0, color: 'dimgray', fontSize: mobile ? '0.7em' : '1.4em'}}>I'm a Software Engineer from Sweden <span role="img">🇸🇪</span></p>
      </FadeIn>
    <button onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500})}>Go To Violet</button>
      </Segment>
);

Hero.propTypes = {
  mobile: PropTypes.bool,
}

export default Hero;
