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
                    <div className='navbar-left'>
                        <div className='nav-logo'><Link to='/feed'><img src={window.logo} /></Link></div>
                    </div>

                    <div className='navbar-right'>
                        <Link to='/feed'>Home</Link>
                        <div className='nav-icon-list'>
                            <div className='friend-request-icon'></div>
                            <div className='messenger-icon'></div>
                            <div className='notifications-icon'></div>
                            <div className='logout-icon'>
                                <div className='logout-notifications'>
                                    <li>
                                        {this.props.currentUser ? <button className="header-button" onClick={this.props.logout}>Logout</button> : null}
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
} 
    
export default NavBar;
