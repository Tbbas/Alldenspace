/*
* Projects View, fetches from internal api.
*/
import React, {Component} from 'react';
import {
  Container, Header, Segment, Grid, Card
} from 'semantic-ui-react';
import ProjectCard from './ProjectCard';
import ProjectFilterButton from './ProjectFilterButton'
import CouldNotLoadProjects from './CouldNotLoadProjects';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      fetchedProjects: [],
      showingProjects: [],
      couldNotFetchData: false,
      availableFilters: new Set(),
      filter: new Set()
    };
  }

// Fetch data from local project api
componentDidMount() {
  fetch('http://localhost:8080/projects',)
  .then(results => {
    return results.json();
  }).then(data => {
    this.setState({
      fetchedProjects: data,
      showingProjects:data,
      availableFilters: this.getFilters(data)
    });
  }).catch(error =>this.setState({couldNotFetchData: true}))
}

// render the project cards
renderProjectCards = (projects) => {
  var newRenderedCards = []
  this.state.showingProjects.forEach((project,i) => {
    newRenderedCards.push(<ProjectCard project={project}/>)});
  return newRenderedCards;
}

// Renders all the filter buttons
renderFilterButtons() {
  let filters = []
      {this.state.availableFilters.forEach(filter => {
        filters.push(<ProjectFilterButton filterName={filter} removeFilterMethod = {this.removeFilter} addFilterMethod = {this.addFilter} />);
  })}
  return (filters);
}

renderFilterSection = () => {
  let filters = {};
    if(this.state.availableFilters.length !== 0) {
       filters = (
        <Segment inverted color={'blue'}>
          <Header as='h3' style={{fontSize: '1.5em', }} content='Filter' />
            {this.renderFilterButtons()}
          </Segment>
        )
  }
  return filters;
}

// Retrieves all filters from fetched data
getFilters = (data) => {
  var filters = new Set();
    data.forEach(entry => {
	     filters.add(entry['area'][0]);
})
      return filters;
}

addFilter = (filterTag) => {
  var newFilter = this.state.filter;
  newFilter.add(filterTag);
  this.setState({filter: newFilter});
  this.updateShowingCards();
};

removeFilter = (filterTag)  => {
  var newFilter = this.state.filter;
  newFilter.delete(filterTag);
  this.setState({filter: newFilter})
}
updateShowingCards = () => {
  alert("length: " + this.state.filter.length)
  if(this.state.filter.length > 0) {
  var newShowingProjects  = this.state.fetchedProjects.filter(project => {
    this.state.filter.has(project['area'][0]);
  });
  this.setState({showingProjects: newShowingProjects})
  console.log("New projects: ", newShowingProjects)
}
}

// Conditional rendering, a bit messy, but it works, lol
  render() {
    return (
      <Container textAlign='center' fluid style={{padding: '3em 0em'}}>
        <Segment  style={{minHeight: 350}} inverted color={'blue'} vertical textAlign='center' >
        <Header as='h1'
        style={{fontSize:  '3em', fontWeight: 'bold', marginBottom : 0, marginTop: '2.5em',}} >
            My projects
          </Header>
          <p>Here are some of the projects I have done</p>
          {this.renderFilterSection()}
            </Segment>
            <Segment flex={0}>
            <Grid columns={3}>
              {this.renderProjectCards(this.state.showingProjects)}
            </Grid>
            </Segment>
      </Container>
    );
  }
}
export default Projects;
