import React from 'react';
import { Link } from 'react-router-dom'

class FriendsInfo extends React.Component{
    constructor(props) {
        super(props)
        // this.displayFriends = this.displayFriends.bind(this);
    }

    // displayFriends() {
    //     // debugger

    //     this.props.friendsIds.map( friendId => {
    //         // return <div>{this.props.users[friendId].fname}</div>
    //         return <div>hi</div>
    //     })
    // }
    

    render() {
        // debugger

        const displayFriends = this.props.friendsIds.map(friendId => {
            return (
                <div className='friend-tile' key={friendId}><Link to={`/users/${friendId}`}>
                    <div className=''><img className='friend-tile-photo' src={this.props.users[friendId].profilePhoto}/></div>
                    <div className='friend-tile-name'><font>{this.props.users[friendId].fname} {this.props.users[friendId].lname}</font></div>
                </Link></div>
            )
        })
        return (
            <div className='profile-friends-container'>
                <div className='profile-friends-icon'></div>
                <h3>Friends 
                    <p className='dot'>•</p>
                    <p className='friend-count'>{this.props.friendsIds.length}</p>
                </h3>
                {/* {this.displayFriends()} */}
                <div className='friends-display'>
                    {displayFriends}
                </div>
            </div>
        )
    }
}

export default FriendsInfo