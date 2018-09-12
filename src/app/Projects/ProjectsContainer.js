import {connect} from 'react-redux';
import AllProjectsContainer from './AllProjectsContainer';

import {projectsOperations} from './duck';

const mapStateToProps = (state) => {
  const {projects, singleProject, loadingProjects, failedToFetchProjects} = state.projects;
  return {
    projects,
    singleProject,
    loadingProjects,
    failedToFetchProjects,
  }
};

const mapDispatchToProps = (dispatch) => {
  const fetchProjects = () => {
    dispatch(projectsOperations.fetchProjects)
  }
  const fetchSingleProject = (project) => {
    dispatch(projectsOperations.fetchSingleProject)
  }
  return {fetchProjects, fetchSingleProject}
};

const ProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProjectsContainer);

export default ProjectsContainer;
