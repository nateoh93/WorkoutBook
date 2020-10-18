import React from 'react';

class FriendsInfo extends React.Component{
    constructor(props) {
        super(props)
        this.displayFriends = this.displayFriends.bind(this);
    }

    displayFriends() {
        debugger

        this.props.friendsIds.map( friendId => {
            // return <div>{this.props.users[friendId].fname}</div>
            return <div>hi</div>
        })
    }
    

    render() {
        debugger

        const displayFriends = this.props.friendsIds.map(friendId => {
            return (
                <div className='friend-tile'>
                    <div className=''><img key={friendId} className='friend-tile-photo' src={this.props.users[friendId].profilePhoto}/></div>
                    <div>{this.props.users[friendId].fname} {this.props.users[friendId].lname}</div>
                </div>
            )
        })
        return (
            <div className='profile-friends-container'>
                <div className='profile-friends-icon'></div>
                <h3>Friends</h3>
                {/* {this.displayFriends()} */}
                <div className='friends-display'>
                    {displayFriends}
                </div>
            </div>
        )
    }
}

export default FriendsInfo