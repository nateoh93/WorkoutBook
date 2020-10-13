import React from 'react';
import { Route } from 'react-router-dom';
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
                <h1>workoutbook</h1>
                <h2>Connect with friends and the world around you on Workoutbook.</h2>
                <LoginFormContainer />
                <NavBarContainer />
            </header>

            {/* <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        </div>
    )
};

export default App;