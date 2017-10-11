import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import './components/style.scss';
import App from './components/App';
import UsersList from './components/UsersList';
import User from './components/User';
import AddUser from './components/AddUser';

import reducer from './components/reducers';

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger()];

const store = createStore(reducer, applyMiddleware(...middleware));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
