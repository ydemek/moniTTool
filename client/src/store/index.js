import appReducer from '../Reducers/reducers';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const consoleMessages = store => next => action => {
    let result = next(action);
    console.groupCollapsed(`Dispatching Action => ${action.type}`);
    console.log('Action payload: ', action.payload);
    console.log('Current Store State: ', store.getState());
    console.groupEnd();
    return result;
};


export default (initialState = {}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState);
};

