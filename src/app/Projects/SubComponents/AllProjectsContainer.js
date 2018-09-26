import React, {Component} from 'react';
import ProjectCard from './ProjectCard';
import {
  Container,
  Grid,
  Segment,
  Header,
  Divider,
  Icon
} from 'semantic-ui-react';
import ProjectFilterButton from './ProjectFilterButton';
import {areas} from '../consts/ProjectConstants';
import PropTypes from 'prop-types';
import { withAuth } from '@okta/okta-react';
import {deleteProject} from '../api/HelperMethods';




export default withAuth(class AllProjectsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredProjects: [],
      activeFilters: [],
      allFilters: []
    }
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }
componentDidMount() {
  this.setState({filteredProjects: this.props.projects})
  this.generateFilters(this.props.projects);
}
async checkAuthentication() {
  const authenticated = await this.props.auth.isAuthenticated();
  if (authenticated !== this.state.authenticated) {
    this.setState({ authenticated });
  }
}

   render() {
  return (
    <Container fluid>
    <Container text style={{padding: '3em 0'}}>
    <Icon size="huge" name="code" /> <p>Software Engineering student based in Gothenburg, Sweden with a focus on Algorithms, Software architecture and process management</p>
    </Container>
    <Container fluid style={{padding: '0em 2em', backgroundColor: '#F7F7F7', minHeight: '100vh'}}>
          <Grid columns={3} equal>
            {this.state.filteredProjects.map((project) =>
              <ProjectCard project={project} authenticated={this.state.authenticated} />
          )}
          </Grid>
    </Container>
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
  projects.forEach((project) => {
    project.area.forEach((filter) =>
      allFilters.add(filter)
    )
  }
  )
}
  this.setState({allFilters:Array.from(allFilters)});
}
});
// Returns all the filter buttons computet from the projects loaded
