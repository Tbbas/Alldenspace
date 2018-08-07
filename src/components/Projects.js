/*
* Hero Message for use as the top greeting on the website
*/
import React, {Component} from 'react';
import {
  Container, Header, Segment, Grid, Card
} from 'semantic-ui-react';
import {BounceLoader} from 'react-spinners';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      couldNotFetchData: false
    };
  }

componentDidMount() {
  fetch('http://localhost:8080/projects',)
  .then(results => {
    return results.json();
  }).then(data => {
    this.setState({projects:this.renderProjectCards(data)});
  }).catch(error =>this.setState({couldNotFetchData: true}))
}

renderProjectCards(projects) {
  var newRenderedCards = []
  projects.forEach(project => {
    newRenderedCards.push(
    <Card
      href={'/projects/' + project._id}
      image={project.image}
      header={project.name}
      description={project.description}
/>);
  })
  return newRenderedCards;

}


  render() {
    if(this.state.projects === undefined
      || this.state.projects.length == 0
      && !this.state.couldNotFetchData) {
      return(
      <Container fluid style={{padding: '3em 0em',}}>
      <Grid className="segment centered">
      <Grid.Row>
        <Header as='h2' content='Projects are loading...' />
        </Grid.Row>
        <Grid.Row>
        <BounceLoader color={'teal'} size={80}/>
        </Grid.Row>
        </Grid>
      </Container>
    );
  } else if(this.state.couldNotFetchData) {
      return(
      <Container fluid style={{padding: '3em 0em',}}>
      <Grid className="segment centered">
      <Grid.Row>
        <Header as='h2' content='Could not fetch the data, please try again later...' />
        </Grid.Row>
        <Grid.Row>
        <span style={{fontSize:48}}>😞</span>
        </Grid.Row>
        </Grid>
      </Container>
    );
    } else {
    return (
      <Container textAlign='center' fluid style={{padding: '3em 0em'}}>
        <Segment  style={{minHeight: 700}}>
        <Header as='h2' content='Hello, there!' />
          {this.state.projects}
            </Segment>
      </Container>
    );
}
  }
}



export default Projects;
