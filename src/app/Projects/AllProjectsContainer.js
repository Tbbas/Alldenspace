import React from 'react';
import shortid from 'shortid';
import LoadingScreen from './LoadingScreen';
import CouldNotLoadProjects from './CouldNotLoadProjects';
import ProjectCard from './ProjectCard';
import {
  Container,Grid,Segment,Header
} from 'semantic-ui-react';

function AllProjectsContainer({
  projects,
  loadingProjects,
  fetchProjects,
  failedToFetchProjects
}) {
  // Render loading on fetch, fail on unable to fetch otherwise the projects
  if(loadingProjects) {
    return <LoadingScreen  />
  } else if(failedToFetchProjects) {
    return <CouldNotLoadProjects />
  } else {
    console.log("PROJECTS: ", projects)
  }
  return (
    <Container textAlign='center' fluid style={{padding: '3em 0em'}}>
      <Segment  style={{minHeight: 350}} inverted color={'blue'} vertical textAlign='center' >
      <Header as='h1'
      style={{fontSize:  '3em', fontWeight: 'bold', marginBottom : 0, marginTop: '2.5em',}} >
          My projects
        </Header>
        <p>Here are some of the projects I have done</p>
          </Segment>
          <Segment flex={0}>
          <Grid columns={3}>
            {projects.map((project) => {
              <ProjectCard project={project} />
            })}
          </Grid>
          </Segment>
    </Container>
  );
}


export default AllProjectsContainer;
