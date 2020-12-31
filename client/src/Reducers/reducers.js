import {combineReducers} from 'redux';
import { cpuReducer } from './cpuReducer.js';
import { networkReducer } from './networkReducer.js';

var reducers = {
    cpu: cpuReducer,
    network: networkReducer
};

export default combineReducers(reducers);