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

const initialState = [
    'Smels',
    'Enter'
];

// Редьюсер получает предыдущий state и action и возвращает новый state, обновляет store при выстреле action
function playlist(state = initialState, action){
    if(action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

// Cоздать новый store
const store = createStore(playlist);

// Передача в качестве аргумента созданный store, который будет доступен каждому child-компоненту провайдера
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);








// const addTrackBtn = document.querySelector('.addTrack');
// const trackInp = document.getElementById('trackInp');
// const list = document.getElementById('list');

// store.subscribe(() => {     // Подписка на изменения в store
//     console.log('subscribe', store.getState());
//     list.innerHTML = '';
//     trackInp.value = '';
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     })
// })

// addTrackBtn.addEventListener('click', () => {
//     trackInp.value;
//     store.dispatch({ type: 'ADD_TRACK', payload: trackInp.value });   // Выстрелить action с нужным типом и данными
//     console.log('track name', trackInp.value);
// })