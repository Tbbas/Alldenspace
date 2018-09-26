import React from 'react';
import Description from './Description';
import scrollToComponent from 'react-scroll-to-component';
import Skills from './Skills'
import Contact from './Contact';
import {
  Segment,
  Container,
  Header,
  Button,
  Icon,
  Flag
} from 'semantic-ui-react';
import FadeIn from 'react-fade-in';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

const Hero = ({mobile}) => (
  <Segment
    inverted
    textAlign='center'
    style={{ padding: '3em 0 ', minHeight: '100vh', backgroundImage: 'url(https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'}}
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
      <p className="headerSub" style={{top: 0, marginBottom: '1em', color: 'dimgray', fontSize: mobile ? '0.7em' : '1.4em'}}>I'm a Software Engineer from Sweden <Flag name='se' /></p>

      </FadeIn>
    <FadeIn delay={5000} transitionDuration={2000}>
    <Button
    inverted
    circular
    icon
    onClick={() => scrollToComponent(this.Description, {offset: 0, align: 'top',duration: 1200})}>
    <Icon
    name="arrow down" />
    </Button>
</FadeIn>
      </Segment>
);

Hero.propTypes = {
  mobile: PropTypes.bool,
}



const Home = () => (
  <Container fluid>
  <Hero />
<section className='description' ref={(section) => { this.Description = section; }}>
  <Description />
  </section>
  <Skills />
  <Contact />
  </Container>
)

export default Home;
