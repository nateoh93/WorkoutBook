import React from 'react';
import { Link } from 'react-router-dom';

class FriendRequestItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleAccept = this.handleAccept.bind(this);
        this.handleDecline = this.handleDecline.bind(this)
    }

    handleAccept(e) {
        debugger

        e.preventDefault();

        let requestedFriendData;

        this.props.requestedFriends.forEach(request => {
            if (this.props.user.id === request.requester_id) {
                requestedFriendData = request;
            }
        })

        this.props.createFriend(requestedFriendData);
    }
    
    handleDecline(e) {
        debugger

        e.preventDefault();

        let requestedFriendData;

        this.props.requestedFriends.forEach( request => {
            if (this.props.user.id === request.requester_id) {
                requestedFriendData = request;
            }
        })

        this.props.deleteFriendRequest(requestedFriendData);
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