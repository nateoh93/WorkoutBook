import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='navbar'>
                <nav>
                    <Link to='/feed'><img src={window.logo}/></Link>
                    <Link to='/feed'>Home</Link>
                    {this.props.currentUser ? <button className="header-button" onClick={this.props.logout}>Log Out</button> : null}
                </nav>
            </div>
        )
    }
} 
    
export default NavBar;
