import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import './components/style.scss'
import App from './components/app.js'
import UsersList from './components/userslist.js'
import User from './components/user.js'
import AddUser from './components/adduser.js'

import reducer from './components/reducers'


const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]


// Cоздать новый store

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

// Передача в качестве аргумента созданный store, который будет доступен каждому child-компоненту провайдера
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);