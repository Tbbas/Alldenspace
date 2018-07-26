/*
*  My Programming and scripting skillsskills
*/

import React from 'react';
import {
  Container,
  Divider,Grid, Popup, Button, Segment, Header, Icon, List
} from 'semantic-ui-react'


const Contact = ({ mobile }) => (
  <Container text>
  <Divider horizontal>Contact</Divider>
  <Header as='h4' textAlign='center'>If you wish to know more about me or contact me, please do so below</Header>
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
)

export default Contact;
