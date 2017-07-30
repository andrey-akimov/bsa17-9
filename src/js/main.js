import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './components/style.scss'
import App from './components/app.js'
import UsersList from './components/userslist.js'
import User from './components/user.js'
import AddUser from './components/adduser.js'

import reducer from './components/reducers'


// Cоздать новый store
const store = createStore(reducer);

// Передача в качестве аргумента созданный store, который будет доступен каждому child-компоненту провайдера
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);