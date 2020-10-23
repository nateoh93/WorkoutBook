import React from 'react';
import { Link } from 'react-router-dom';

class FriendRequestItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleAccept = this.handleAccept.bind(this);
        this.handleDecline = this.handleDecline.bind(this)
    }

    handleAccept() {
        e.preventDefault();
        // this.props.createFriend();
    }
    
    handleDecline() {
        e.preventDefault();
        // this.props.deleteFriend();
    }

    render() {
        return (
            <li>
                <Link to={`/users/${this.props.user.id}`}><div className='request-container'>
                    <img className='request-photo' src={this.props.user.profilePhoto}/>
                    <p>{this.props.user.fname} {this.props.user.lname}</p>
                </div></Link>

                <div className='request-buttons'>
                    <div><div className='request-buttons answer' onClick={this.handleAccept}>Confirm</div></div>
                    <div className='request-buttons cancel' onClick={this.handleDecline}>Delete</div>
                </div>
            </li>
        );
    }
}

export default FriendRequestItem