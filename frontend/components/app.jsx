import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'

const App = () => {
    return(
        <div>
            <header>
                <h1>workoutbook</h1>
                <h2>Connect with friends and the world around you on Workoutbook.</h2>
            </header>

            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </div>
    )
};

export default App;