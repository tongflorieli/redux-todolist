import {createStore, applyMiddleware } from 'redux';
import {combineReducers} from 'redux';
import todoReducer from '../src/store/reducer';

const rootReducer = combineReducers({todoReducer});

export default createStore(rootReducer);
