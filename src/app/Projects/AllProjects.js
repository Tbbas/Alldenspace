import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return { projects: state.projects };
};

const ProjectList = ({projects}) => (
  <ul style={{margin: '3em 0em'}}>
    {projects[0].area}
  </ul>
)
const AllProjects = connect(mapStateToProps)(ProjectList);

export default AllProjects;
