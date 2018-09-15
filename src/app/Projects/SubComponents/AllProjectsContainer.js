import React, {Component} from 'react';
import ProjectCard from './ProjectCard';
import {
  Container,
  Grid,
  Segment,
  Header,
  Divider
} from 'semantic-ui-react';
import ProjectFilterButton from './ProjectFilterButton';
import {PROJECT_TYPES} from '../consts/Areas';

class AllProjectsContainer extends Component {
  constructor() {
    super();
    this.state = {
      filteredProjects: [],
      activeFilters: [],
      allFilters: []
    }
  }
componentDidMount() {
  this.setState({filteredProjects: this.props.projects})
}

   render() {
  return (
    <Container textAlign='center' fluid style={{padding: '3em 0em'}}>
      <Segment  style={{minHeight: 350, backgroundColor: '#0097A7'}} inverted vertical textAlign='center' >
      <Header as='h1'
      style={{fontSize:  '3em', fontWeight: 'bold', marginBottom : 0, marginTop: '2.5em',}} >
          My projects
        </Header>
        <p>Here are some of the projects I have done</p>
          <h4>Filter:</h4>
          <Divider />
          {PROJECT_TYPES.map((filter) =>
              <ProjectFilterButton applyFilterMethod={this.handleFilterButtonClick} name={filter} />
          )}

          </Segment>
          <Segment flex={0}>
          <Grid columns={3}>
            {this.state.filteredProjects.map((project) =>
              <ProjectCard project={project} />
          )}
          </Grid>
          </Segment>
    </Container>
  );
}

// Remove a filter
handleFilterButtonClick = (active,name ) => {
  if(active) {
    let newActiveFilters = this.state.activeFilters;
    newActiveFilters.push(name);
    this.setState(
      {activeFilters: newActiveFilters}
    );
  } else {
    let newActiveFilters = this.state.activeFilters;
    newActiveFilters.splice( this.state.activeFilters.indexOf(name), 1 );
    this.setState({activeFilters: newActiveFilters});
  }
  this.applyFilters();
}

applyFilters = () => {
  if(this.state.activeFilters.length != 0) { // Dont need to filter projects if there are no filters
    let newFilteredProjects = [];
    let currentLoadedProjects = this.props.projects;
    console.log("Projects: ", currentLoadedProjects)
    this.props.projects.forEach((project) =>{
      project.area.forEach((filter, i) => {
        if(this.state.activeFilters.indexOf(filter) > -1) {
          newFilteredProjects.push(project);
        }
      })
    });
    this.setState({filteredProjects: newFilteredProjects});
  } else {
    this.setState({filteredProjects: this.props.projects})
  }
}
generateFilters = (projects) => {
  let allFilters = new Set([]);
  if(projects) {
  projects.map((project) =>
    projects.area.map((filter) =>
      allFilters.push(filter)
    )
  )
}
console.log("Returning filters: ", allFilters)
  return allFilters;
}
}
// Returns all the filter buttons computet from the projects loaded




export default AllProjectsContainer;
