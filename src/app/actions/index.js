import {
  LOAD_PROJECTS ,
  SET_ACTIVE_MENU_ITEM,
  FILTER_PROJECTS,
  RECIEVE_PROJECTS
} from '../constants/action-types';

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
    return fetch('http://localhost:8080/projects')
      .then(response => response.json())
      .then(json => dispatch(recieveProjects(json, false)))
      .catch((e) => {
        console.log("Error while fetching projects: ", e)
        dispatch(recieveProjects([], true))
      })
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
