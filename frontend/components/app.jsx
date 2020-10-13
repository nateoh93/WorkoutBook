import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import {AuthRoute} from '../util/route_util'
import Modal from './modal/modal'

const App = () => {
    return(
        <div>
            <Modal />
            <header>
            <NavBarContainer />
                <div className="splash-header">
                    <h1 className='splash-logo'>workoutbook</h1>
                    <h2 className='splash-title'>Connect with friends and the world around you on Workoutbook.</h2>
                </div>
                <LoginFormContainer />
            </header>
            <Switch>

                <Redirect to='/' />
            </Switch>
        </div>
    )
};

export default App;