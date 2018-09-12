 import React, { Component } from 'react';
 import {
  Container, Grid, Button, Segment, Icon
 } from 'semantic-ui-react';

class AddNewProject extends Component {
  constructor() {
    super();
    this.state = {
      showSuccessScreen: false,
    }
  }

  showSuccessScreen = (bool) => this.setState({ showSuccessScreen: bool});

  render() {
    if(this.state.showSuccessScreen) {
      return (
        <Container textAlign='center' fluid style={{margin: '3em'}}>
        <Segment color={'green'} inverted>
        <h1>Success!</h1>
        <Button onClick={this.showSuccessScreen}><Icon name='plus'/></Button>
        </Segment>
        </Container>
      );
    } else {
      return (
        <Container text>
        <p>Form</p>
        <Button onClick={this.showSuccessScreen}><Icon name='plus'/></Button>
        </Container>
      );
    }
  }


  submitArticle = () => {
    // Submit
    this.setState({showSuccessScreen: !this.state.showSuccessScreen});
  }

}

export default AddNewProject;
