import { reducer as form } from 'redux-form';
import mainReducer from './main';
import { combineReducers } from 'redux';

export default combineReducers({ form, mainReducer });
