import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// MODULES
import App from './App';
import storeFactory from './store/index.js';
// import initSocket from './service/socketService';
import initialState from './store/initialState.json';


// STYLES
import './index.css';

const store = storeFactory(initialState);
// initSocket(store);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

