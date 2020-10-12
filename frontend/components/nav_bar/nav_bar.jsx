import React from 'react';



const NavBar = ({ currentUser, logout }) => {
    
    const logoutButton = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? <button className="header-button" onClick={logout}>Log Out</button> : null;
};


export default NavBar;
