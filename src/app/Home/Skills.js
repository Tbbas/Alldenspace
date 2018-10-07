/*
*  My Programming and scripting skillsskills
*/

import React from 'react';
import {
  Container,
  Divider,Grid, Popup, Button, Segment, Header, Icon, List
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import {home} from './home.css';
import {
  primary_dark,
  primary_light,
  light_accent
} from '../Common/ColorScheme';


const Description = () => (
  <div style={{backgroundColor: primary_light}}>
  <Segment basic inverted style={{color: 'white', minHeight: '50vh', paddingTop: '5vh' ,backgroundColor: primary_dark}}>
  <Container textAlign="center" text>
    <Header as='h1' content="Skills" style={{color: '#fff'}}/>
    <p>During my education and throughout various hobby projects and hackathons I have aquired skills and knowledge in various areas.</p>
    </Container>
    </Segment>
    <Segment style={{marginTop: '-22vh', marginLeft: ' 5vh', marginRight: '5vh', backgroundColor: primary_light}}>
    <Grid  stackable columns={3} divided>
      <Grid.Column>
      <Container fluid className="skillSection">
        <Zoom>
      <Icon name="code" size='huge' style={{color: light_accent}} />
      <br/>
      <Header as='h3' content="Languages" />
      <br/>
      <p>I enjoy trying various programming languages to see what they can offer</p>
      <div className="skillSectionSegment">
      <h4 className="skillListHeader" style={{color: light_accent}}>Which are I comfortable working with?</h4>
        <List>
        <List.Item>Java</List.Item>
        <List.Item>Javascript</List.Item>
        <List.Item>Python</List.Item>
        <List.Item>C#</List.Item>
        <List.Item>PHP</List.Item>
          </List>
        </div>
        <br/>

          <div class="skillSectionSegment">
          <h4 className="skillListHeader" style={{color: light_accent}}>Which other have I tried?</h4>
          <List>
              <List.Item>Haskell</List.Item>
              <List.Item>Erlang</List.Item>
              <List.Item>Go</List.Item>
              <List.Item>C++</List.Item>
              <List.Item>C</List.Item>
              </List>
          </div>
          </Zoom>
        </Container>

      </Grid.Column>
      <Grid.Column>
      <Container fluid className="skillSection">
      <Zoom>
      <Icon name="file code outline" size='huge' style={{color: light_accent}} />
      <br/>

      <Header as='h3' content="Frameworks / Technologies" />
      <br/>

      <p>I have also tried an array of various frameworks & Technologies that simplify tasks</p>

      <div className="skillSectionSegment">
      <h4 className="skillListHeader" style={{color: light_accent}}>Web development</h4>
        <List>
        <List.Item>ReactJs</List.Item>
        <List.Item>Ruby on Rails</List.Item>
        <List.Item>Node.js</List.Item>
        <List.Item>Django</List.Item>
        <List.Item>Wordpress</List.Item>
        <List.Item>Semantic UI</List.Item>
        <List.Item>Bootstrap</List.Item>
          </List>
        </div>
        <br/>

          <div class="skillSectionSegment">
          <h4 className="skillListHeader" style={{color: light_accent}}>Mobile</h4>
          <List>
              <List.Item>React Native</List.Item>
              <List.Item>Android</List.Item>
              </List>
          </div>
          </Zoom>
        </Container>
      </Grid.Column>
      <Grid.Column>
      <Container fluid className="skillSection">
      <Zoom>
      <Icon name="book" size='huge' style={{color: light_accent}} />
      <br/>
      <Header as='h3' content="Software Engineering" />
      <br/>
      <p>During my edication I have learnt about various Software Engineering practices</p>
      <br/>
      <div className="skillSectionSegment">
        <List>
        <List.Item>Agile Workflow</List.Item>
        <List.Item>Software Architectures</List.Item>
        <List.Item>Requirements Engineering</List.Item>
        <List.Item>Empirical Software Engineering</List.Item>
        <List.Item>Algorithms (My favorite!)</List.Item>

          </List>
        </div>
        </Zoom>
        </Container>
      </Grid.Column>
    </Grid>
    </Segment>
    </div>
)

export default Description;
