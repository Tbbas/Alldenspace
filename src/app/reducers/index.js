import {LOAD_PROJECTS, SET_ACTIVE_MENU_ITEM} from '../constants/action-types';
import getAllProjects from '../Api/ProjectAPI';

const initialState = {
  projects: [],
  errorFetchingProjects: false,
  loadingProjects: true,
  currentActiveMenuItem: 'home'
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PROJECTS:
      return state;
    case SET_ACTIVE_MENU_ITEM:
      return {...state, currentActiveMenuItem: action.currentActiveMenuItem};

    default:
      return state;
  }

};

export default rootReducer;
