import {
  LOAD_PROJECTS,
  SET_ACTIVE_MENU_ITEM,
  RECIEVE_PROJECTS
} from '../constants/action-types';

const initialState = {
  projects: [],
  activeFilters: [],
  errorFetchingProjects: false,
  loadingProjects: false,
  currentActiveMenuItem: 'home'
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PROJECTS:
      return {...state,loadingProjects: true,errorFetchingProjects: false }
    case RECIEVE_PROJECTS:
      return {...state,loadingProjects:false,errorFetchingProjects: action.error, projects: action.projects}
    case SET_ACTIVE_MENU_ITEM:
      return {...state, currentActiveMenuItem: action.currentActiveMenuItem};

    default:
      return state;
  }

};

export default rootReducer;
