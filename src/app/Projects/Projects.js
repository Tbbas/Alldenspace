import React, {Component} from 'react';
import {
  Container,
  Segment
} from "semantic-ui-react";
import {
  loadProjectsIfNeeded,
  changeTab
} from '../actions/index';
import {connect} from "react-redux";
import LoadingProjects from './SubComponents/LoadingScreen';
import CouldNotLoadProjects from './SubComponents/CouldNotLoadProjects';
import AllProjectsContainer from './SubComponents/AllProjectsContainer';


class ProjectsView extends Component {
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(loadProjectsIfNeeded())
    // If one visits this url directly or not using react router
    if(this.props.currentActiveMenuItem != 'projects') {
      dispatch(changeTab('projects'))
    }
  }
  render() {
    if(this.props.loadingProjects && this.props.projects.length == 0) {
      return (<LoadingProjects />);
    } else if(this.props.errorFetchingProjects && !this.props.loadingProjects) {
      return (
        <CouldNotLoadProjects error={true}/>
      );
    } else if (this.props.projects.length === 0) {
      return (
        <CouldNotLoadProjects error={false} />
      );
    }else {
        return (
            <AllProjectsContainer projects = {this.props.projects }/>
        );
      }
  }

}

const mapDispatchToProps = () =>{
  changeTab
}


const mapStateToProps = (state) => ({
    loadingProjects: state.loadingProjects,
    projects: state.projects,
    errorFetchingProjects: state.errorFetchingProjects,
    currentActiveMenuItem: state.currentActiveMenuItem
});

const Projects = connect(mapStateToProps)(ProjectsView);


export default Projects;
