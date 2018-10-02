import {
  LOAD_PROJECTS ,
  SET_ACTIVE_MENU_ITEM,
  FILTER_PROJECTS,
  RECIEVE_PROJECTS,
  DELETE_PROJECT,
  UPDATE_PROJECT
} from '../constants/action-types';
import S3FileUpload from 'react-s3';
import { deleteFile } from 'react-s3';
import {amazonConfig} from '../Projects/api/apiConfig';


const axios = require('axios');


export const changeTab = currentActiveMenuItem => ({
  type: SET_ACTIVE_MENU_ITEM,
  currentActiveMenuItem,
});

function loadProjects() {
  return{
    type: LOAD_PROJECTS
  }
}
// Called via async callback on project fetch
function recieveProjects(json, error) {
  return {
    type: RECIEVE_PROJECTS,
    projects: json.map(project => project),
    error: error,
    recieved_at: Date.now()
  }
}
function fetchProjects() {
  return dispatch => {
    dispatch(loadProjects())
    return   axios.get('/api/projects')
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch(recieveProjects(response.data, false))
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch(recieveProjects([], true))
      })
      .then(function () {
        // always executed
      });
  } 

}

  function shouldLoadProjects(state) {
    const projects = state.projects;
    if(!projects) {
      return true;
    } else if(state.loadingProjects) {
      return false;
    } else {
      return true;
    }
  }
  export function loadProjectsIfNeeded() {
    return (dispatch, getState) => {
      if(shouldLoadProjects) {
        return dispatch(fetchProjects());
      }
    }
  }

  export function deleteProject(project) {
    return dispatch => {
      S3FileUpload.deleteFile(project.image, amazonConfig)
      .then((data) => {
        return axios.delete(`/api/projects/${project._id}`)
          .then(function (response) {
            // handle success
            console.log(response);
            dispatch(fetchProjects())
          })
          .catch(function (error) {
            // handle error
            console.log(error);

          })
      })
      .catch((error) => {
        alert(error)
      })
    } 
  }
  export function updateProject(project) {
    return dispatch => {
      return axios.put('/api/projects', { project: {project}})
        .then(function (response) {
          console.log(response);
          dispatch(fetchProjects())
        })
        .catch(function (error) {
          console.log(error);

        })
    } 
  }
