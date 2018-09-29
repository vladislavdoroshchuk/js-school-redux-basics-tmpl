import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { counterReducer, nameReducer as name, isStudentReducer as isStudent} from './reducers';

const appReducer = combineReducers({ value: counterReducer, name, isStudent });

export const store = createStore(
  appReducer, 
  undefined, 
  applyMiddleware(logger)
);
