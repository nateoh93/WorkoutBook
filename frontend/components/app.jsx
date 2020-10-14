import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashContainer from './splash';
import NavBarContainer from './nav_bar/nav_bar_container';
import NewsFeedContainer from './news_feed/news_feed_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import Modal from './modal/modal'

const App = () => {
    return(
        <div>
            <Modal />
            <NavBarContainer />

            <Switch>
                {/* <ProtectedRoute path='/users/:userId' component={ProfileContainer} /> */}
                <ProtectedRoute exact path='/feed' component={NewsFeedContainer} />
                {/* <AuthRoute path='/login' component={LoginFormContainer} />
                <AuthRoute path='/signup' component={SignupFormContainer} /> */}
                <AuthRoute exact path='/' component={SplashContainer} />
                <Redirect to='/feed' />
            </Switch>
        </div>
    )
};

export default App;