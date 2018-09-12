import {combineReducers} from 'redux';
import projectsReducer from './app/Projects/duck/reducers';

const rootReducer = combineReducers({
  projects: projectsReducer
});
export default rootReducer;
