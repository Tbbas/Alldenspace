/*
*  My Programming and scripting skillsskills
*/

import React from 'react';
import {
  Container,
  Divider,Grid, Popup, Button, Segment, Header, Icon, List
} from 'semantic-ui-react'
import {
  primary_dark,
  primary_light,
  light_accent
} from '../Common/ColorScheme';


const Contact = ({ mobile }) => (
  <Container fluid style={{padding: '3em 0em', backgroundColor: primary_dark, color:'white' }}>
  <Container text>
  <Header as='h1' content="Contact" textAlign="center" style={{color: '#fff'}}/>
  <Header as='h4' textAlign='center' style={{color: '#fff'}}>If you wish to know more about me or contact me, please do so below</Header>
  <Grid columns={3} divided centered>
    <Grid.Column>
      <List>
        <List.Item>
          <List.Icon name="user" />
          <List.Content>Tobias Alldén</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>Gothenburg, Sweden</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content><a href='mailto:alldentobias@gmail.com'>alldentobias@gmail.com</a></List.Content>
        </List.Item>
    </List>
    </Grid.Column>
    <Grid.Column>
    <List>
      <List.Item>
        <List.Icon name="linkedin" />
        <List.Content><a href='https://www.linkedin.com/in/tobiasallden/'>linkedin.com/in/tobiasallden/</a></List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="github" />
        <List.Content><a href='https://github.com/Tbbas'>github.com/Tbbas</a></List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="instagram" />
        <List.Content><a href='https://www.instagram.com/alldentobias/'>www.instagram.com/alldentobias/</a></List.Content>
      </List.Item>
  </List>
  </Grid.Column>
  </Grid>
  </Container>
  </Container>
)

export default Contact;
