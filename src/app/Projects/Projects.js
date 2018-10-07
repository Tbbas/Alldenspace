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
import ErrorScreen from './SubComponents/ErrorScreen';
import AllProjectsContainer from './SubComponents/AllProjectsContainer';



class ProjectsView extends Component {
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(loadProjectsIfNeeded())
    // If one visits this url directly or not using react router
    if(this.props.currentActiveMenuItem != 'projects') {
      dispatch(changeTab('portfolio'))
    }
  }
  render() {
    console.log("My projects: ", this.props.projects);
    if(this.props.loadingProjects && this.props.projects.length == 0) {
      return (<LoadingProjects loadingMessage={'Loading projects...'}/>);
    } else if(this.props.errorFetchingProjects && !this.props.loadingProjects) {
      return (
        <ErrorScreen error={true} message={"Could not reach the server, please try again later"}/>
      );
    } else if (this.props.projects.length === 0) {
      return (
        <ErrorScreen error={false} message={"There exist no entries on the server, please check back later "} />
      );
    }else {
        return (
            <AllProjectsContainer projects = {this.props.projects }/>
        );
      }
  }

}



const mapStateToProps = (state) => ({
    loadingProjects: state.loadingProjects,
    projects: state.projects,
    errorFetchingProjects: state.errorFetchingProjects,
    currentActiveMenuItem: state.currentActiveMenuItem
});

const Projects = connect(mapStateToProps)(ProjectsView);


export default Projects;
