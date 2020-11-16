import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import ReactGA from 'react-ga';

document.addEventListener('DOMContentLoaded', () => {
    function initializeReactGA() {
        ReactGA.initialize('G-YKVSFEZXN7');
        ReactGA.pageview('/homepage');
    }

    initializeReactGA();

    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
})