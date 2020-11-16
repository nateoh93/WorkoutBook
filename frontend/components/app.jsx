import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashContainer from './splash';
import ProfileContainer from './profile/profile_container';
import NewsFeedContainer from './news_feed/news_feed_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Modal from './modal/modal';
import ReactGA from 'react-ga';


const App = () => {
    function initializeReactGA() {
        ReactGA.initialize('G-YKVSFEZXN7');
        ReactGA.pageview(window.location.pathname);
    }

    initializeReactGA();
    
    return(
        <div>
            <Modal />
            <NavBarContainer />
            
            <Switch>
                <ProtectedRoute path='/users/:userId' component={ProfileContainer} />
                <ProtectedRoute path='/feed' component={NewsFeedContainer} />
                <AuthRoute exact path='/' component={SplashContainer} />
                <Redirect to='/feed' />
            </Switch>
        </div>
    )
};

export default App;