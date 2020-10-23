import React from 'react';
import FriendRequestItem from './friend_request_item';

class FriendRequest extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const requestList = this.props.requestedUsers.map( user => {
            return <FriendRequestItem
                key={user.id}
                user={user}
                deleteFriend={this.props.deleteFriend}
                createFriend={this.props.createFriend}
            />
        })
        return (
            <ul className='request-index'>
                {requestList}
            </ul>
        );
    }
}

export default FriendRequest;