import React from 'react';

class NavBar extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return this.props.currentUser ? <button className="header-button" onClick={this.props.logout}>Log Out</button> : null;;
    }
} 
    
    // const logoutButton = () => (
    //     <hgroup className="header-group">
    //         <h2 className="header-name">Hi, {currentUser.username}!</h2>
    //         <button className="header-button" onClick={logout}>Log Out</button>
    //     </hgroup>
    // );


export default NavBar;
