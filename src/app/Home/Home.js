import React, {Component} from 'react';
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
import {
  light_accent
} from '../Common/ColorScheme';
import {home} from './home.css';

class Home extends Component {
  render() {
    let Desc = "";
    return (
      <div>
      <Segment
      basic
        inverted
        textAlign='center'
        className='headerImage'
        style={{backgroundImage: 'url(/images/header.jpeg)'}}
        vertical
      >
      <Typist avgTypingDelay={80} cursor={{show: false,}}>
      <Header as='h1'
      inverted
      style={{fontSize: '4em', fontWeight: 'bold', marginBottom : 0, marginTop:  '3em',}} >
          Hello, World!
        </Header>
          <p className="headerSub" style={{top: 0, color: 'dimgray',  fontSize: '2em'}}> My name is: <span style={{fontWeight: 'bold', color:light_accent}}> Tobias Alldén</span></p>
          </Typist>
          <FadeIn delay={4000} transitionDuration={2000}>
          <p className="headerSub" style={{top: 0, marginBottom: '1em', color: 'dimgray', fontSize:  '1.4em'}}>I'm a Software Engineer from Sweden <Flag name='se' /></p>

          </FadeIn>
        <FadeIn delay={5000} transitionDuration={2000}>
        <Button
        inverted
        circular
        icon
        onClick={() => scrollToComponent(this.Desc, {offset: 0, align: 'top',duration: 1200})}>
        <Icon
        name="arrow down" />
        </Button>
    </FadeIn>
          </Segment>
    <section className='description' ref={(section) => {this.Desc = section; }}>
      <Description />
      </section>
      <Skills />
      <Contact />
      </div>
    );
  }
}

export default Home;
