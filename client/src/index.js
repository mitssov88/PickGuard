import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {allReducers} from "./reducers/index.js";

const store = createStore(allReducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>, 
    document.getElementById('root')
);