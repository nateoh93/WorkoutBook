import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            dropdown: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleClick() {
        let toggle = this.state.dropdown ? false : true;
        this.setState({dropdown: toggle})        
    }

    handleLogOut() {
        this.props.logout();
        this.handleClick();
    }

    render() {
        return (
            <div className='navbar'>
                <nav>
                    <div className='navbar-left'>
                        <div className='nav-logo'><Link to='/feed'><img src={window.logo} /></Link></div>
                        <form className='search-bar-form'>
                            <input className='search-bar' type="text" placeholder='Search'/>
                        </form>
                    </div>

                    <div className='navbar-right'>
                        <div className='nav-button'>
                            <li className='nav-profile-button'><Link to={`/feed`}>User Profile</Link></li>
                            <li className='nav-home-button'><Link to='/feed'>Home</Link></li>
                        </div>
                        
                        <div className='nav-icon-list'>
                            <div className='friend-request-icon'></div>
                            <div className='messenger-icon'></div>
                            <div className='notifications-icon'></div>
                            <div className='navbar-logout-container'>
                                <div className='logout-icon' onClick={this.handleClick}></div>
                                <div className={`logout-dropdown ${this.state.dropdown}`}>
                                    <li>
                                        {this.props.currentUser ? <button className="header-button" onClick={this.handleLogOut}>Logout</button> : null}
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
