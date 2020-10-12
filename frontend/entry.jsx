import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

//testing start
import * as SessionAPIUtil from './util/session_api_util'
import {signup, login, logout} from './actions/session_actions'
//testing end

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Workoutbook</h1>, root)

    //testing start
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    //testing end
})