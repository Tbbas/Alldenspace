import React, {Component} from 'react';
import {
  Grid, Header,Container, Segment
} from 'semantic-ui-react';
import {BounceLoader} from 'react-spinners';

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Container fluid style={{padding: '3em 0em', minHeight: '100vh'}}>
      <Segment
      inverted
      color={'blue'}
      style={{ minHeight: '50vh'}}
      >
      <Grid className="centered"vertical>
      <Grid.Row>
        <Header as='h1' inverted style={{paddingTop: '3em'}} content={this.props.loadingMessage} />
        </Grid.Row>
        <Grid.Row>
        <BounceLoader color={'white'} size={100}/>
        </Grid.Row>
        </Grid>
        </Segment>
      </Container>
)}
}

export default LoadingScreen;
