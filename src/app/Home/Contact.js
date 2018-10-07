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
  <div style={{padding: '3em 0em', backgroundColor: primary_dark, color:'white' }}>
  <Container text textAlign='center'>
  <Header as='h1' content="Contact" textAlign="center" style={{color: '#fff'}}/>
  <Header as='h4' textAlign='center' style={{color: '#fff'}}>If you wish to know more about me or contact me, please do so below</Header>
  <Grid columns={3} stackable divided centered >
  <Grid.Row only="large screen">
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
  </Grid.Row>
  <Grid.Row only='tablet mobile' style={{paddingTop: '1.2em'}}>
  <List>
  <List.Item>
    <Header as ='h5' style={{color: 'white'}}><Icon name="user" />Tobias Alldén</Header>
    </List.Item>
    <List.Item>
    <Header as ='h5' style={{color: 'white'}}><Icon name="marker" />Gothenburg, Sweden</Header>
      </List.Item>
      <List.Item>
          <Grid columns={4} divided>
          <Grid.Column>
            <a style={{color:'white', fontSize: '18pt'}}  href='mailto:alldentobias@gmail.com'><Icon link color='white' name='mail'/></a>
          </Grid.Column>
          <Grid.Column>
            <a style={{color:'white', fontSize: '18pt'}}  href='https://www.linkedin.com/in/tobiasallden/'><Icon link color='white' name='linkedin'/></a>
          </Grid.Column>
          <Grid.Column>
            <a style={{color:'white', fontSize: '18pt'}}  href='https://github.com/Tbbas'><Icon link color='white' name='github'/></a>
          </Grid.Column>
          <Grid.Column>
            <a style={{color:'white', fontSize: '18pt'}} href='https://www.instagram.com/alldentobias/'><Icon link name='instagram'/></a>
          </Grid.Column>
          </Grid>
      </List.Item>
    </List>
  </Grid.Row>
  </Grid>
  </Container>
  </div>
)

export default Contact;
