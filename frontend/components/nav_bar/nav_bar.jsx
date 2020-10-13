import React from 'react';

class NavBar extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return this.props.currentUser ? <button className="header-button" onClick={this.props.logout}>Log Out</button> : null;;
    }
} 
    
export default NavBar;
