import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     status: 'unchanged'
        // }
        this.handleRequest = this.handleRequest.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.displayFriendButton = this.displayFriendButton.bind(this);
    }

    handleRequest(e) {
        e.preventDefault();

        this.props.requestFriend({ requestee_id: this.props.postProfile.id }).then(this.props.fetchAllUsers())
    }
    
    handleRemove(e) {
        e.preventDefault();
        let friendship;
        this.props.currentUserFriends.forEach( friend => {
            if (friend.friend_id === this.props.postProfile.id) {
                friendship = friend;
            }
        })
        this.props.deleteFriend(friendship).then(this.props.fetchUser(this.props.postProfile.id))
    }

    displayFriendButton() {
        
        let alreadyFriends = false;
        let pendingFriendship = false;

        this.props.currentUserFriends.forEach( friend => {
            if (friend.friend_id === this.props.postProfile.id) {
                alreadyFriends = true;
            }
        })

        this.props.friendRequests.forEach( request => {
            if ((request.requester_id === this.props.postProfile.id && request.requestee_id === this.props.currentUser.id) ||
                (request.requestee_id === this.props.postProfile.id && request.requester_id === this.props.currentUser.id)) {
                    pendingFriendship = true;
            }
        })
        debugger
        if (this.props.postProfile.id === this.props.currentUser.id) {
            return null;
        } else if (alreadyFriends === true) {
            return <button className='delete-friend-btn' onClick={this.handleRemove}>Unfriend</button>
        } else if (pendingFriendship === true) {
            return <button className='pending-friendship-btn'>Pending</button>
        } else {
            return <button className='request-friendship-btn' onClick={this.handleRequest}>Add Friend</button>
        }

    }

    render() {
        return (
            <div className='friend-btn-container'>
                {this.displayFriendButton()}
            </div>
        );
    }
}

export default FriendForm