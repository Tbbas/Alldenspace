import React,{Component} from 'react';
import {
  Grid,
  Header,
  Container,
  Segment,
  Icon
} from 'semantic-ui-react';

class ErrorScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if(this.props.error) {
      return (
        <Container fluid style={{padding: '3em 0em'}}>
        <Segment
          inverted
          textAlign = 'center'
          color={'red'}
          style={{height: '50vh'}}
          >
        <Grid className='centered' style={{paddingTop: '3em'}}>
        <Grid.Row>
          <Header as='h1' inverted content={this.props.message} />
          </Grid.Row>
          <Grid.Row>
          <Header as='h1' inverted>😔</Header>
          </Grid.Row>
          </Grid>
          </Segment>
        </Container>
      )
    } else {
      return (
        <Container fluid style={{padding: '3em 0em'}}>
        <Segment
          inverted
          textAlign = 'center'
          color={'blue'}
          style={{height: '100vh'}}
          >
        <Grid className='centered' style={{paddingTop: '10em'}}>
        <Grid.Row>
          <Header as='h1' inverted content= {this.props.message} />
          </Grid.Row>
          </Grid>
          </Segment>
        </Container>
      )
    }
  }

}
export default ErrorScreen;
