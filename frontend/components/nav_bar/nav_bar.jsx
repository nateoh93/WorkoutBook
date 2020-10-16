import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            logoutDropdown: false,
            notifsDropdown: false,
            messagesDropdown: false,
            friendsDropdown: false,
        }

        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleDropdown(field) {
        let toggle = this.state[field] ? false : true;
        return () => {
            this.setState({[field]: toggle})      
        }
    }

    handleLogOut() {
        this.props.logout();
        this.handleDropdown();
    }

    render() {
        if (this.props.currentUser) {            
            return (
                <div className='navbar'>
                    <nav>
                        <div className='navbar-left'>
                            <div className='nav-logo'><Link to='/feed'><img className='logo-img' src={window.logo} /></Link></div>
                            <form className='search-bar-form'>
                                <input className='search-bar' type="text" placeholder='Search'/>
                            </form>
                        </div>
    
                        <div className='navbar-right'>
                            <div className='nav-button'>
                                <li className='nav-profile-button'><Link to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.fname}</Link></li>
                                <li className='nav-home-button'><Link to='/feed'>Home</Link></li>
                            </div>
                            
                            <div className='nav-icon-list'>
                                <div className='navbar-friend-request-container'>
                                    <div className='friend-request-icon' onClick={this.handleDropdown('friendsDropdown')}></div>
                                    <div className={`friend-request-dropdown ${this.state.friendsDropdown}`}>
                                        <li className='friend-request'>Friend Requests</li>
                                        <li>You don't have any friend requests</li>
                                    </div>
                                </div>
                                
                                <div className='navbar-messages-container'>
                                    <div className='messenger-icon' onClick={this.handleDropdown('messagesDropdown')}></div>
                                    <div className={`messages-dropdown ${this.state.messagesDropdown}`}>
                                        <li className='messages'>Messages</li>
                                        <li>No new messages!</li>
                                    </div>
                                </div>

                                <div className='navbar-notifications-container'>
                                    <div className='notifications-icon' onClick={this.handleDropdown('notifsDropdown')}></div>
                                    <div className={`notifications-dropdown ${this.state.notifsDropdown}`}>
                                        <li className='notifs'>Notifications</li>
                                        <li>You are caught up on notifications</li>
                                    </div>
                                </div>

                                <div className='navbar-logout-container'>
                                    <div className='logout-icon' onClick={this.handleDropdown('logoutDropdown')}></div>
                                    <div className={`logout-dropdown ${this.state.logoutDropdown}`}>
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
        } else {
            return null;
        }
    }
} 
    
export default NavBar;
