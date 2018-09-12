import { LOAD_PROJECTS , SET_ACTIVE_MENU_ITEM} from '../constants/action-types';

export const loadProjects = () => ({type: LOAD_PROJECTS});
export const changeTab = currentActiveMenuItem => ({
  type: SET_ACTIVE_MENU_ITEM,
  currentActiveMenuItem,
});
