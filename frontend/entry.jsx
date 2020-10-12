import React from 'react';
import ReactDOM from 'react-dom';

//testing start
import * as SessionAPIUtil from './util/session_api_util'
//testing end

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Workoutbook</h1>, root)

    //testing start
    window.signup = SessionAPIUtil.signup
    window.login = SessionAPIUtil.login
    window.logout = SessionAPIUtil.logout
    //testing end
})