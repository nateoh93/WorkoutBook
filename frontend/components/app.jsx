import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashContainer from './splash';
import ProfileContainer from './profile/profile_container';
import NewsFeedContainer from './news_feed/news_feed_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import Modal from './modal/modal'

//test


const App = () => {
    return(
        <div>
            <Modal />
            <NavBarContainer />
            
            <Switch>
                <ProtectedRoute path='/users/:userId' component={ProfileContainer} />
                <ProtectedRoute path='/feed' component={NewsFeedContainer} />
                <AuthRoute exact path='/' component={SplashContainer} />
                <Redirect to='/feed' />
                
                {/* <AuthRoute path='/login' component={LoginFormContainer} />
                <AuthRoute path='/signup' component={SignupFormContainer} /> */}
            </Switch>
        </div>
    )
};

export default App;