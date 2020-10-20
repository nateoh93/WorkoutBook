import React from 'react';
import { Link } from 'react-router-dom'

class FriendsInfo extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps, prevState) {
        // debugger
        // if (prevProps.postProfile !== this.props.postProfile) {
        //     this.props.fetchPosts(this.props.postProfile.id)
        // }
    }

    render() {
        // debugger
        let displayFriends;
        if (Object.keys(this.props.friendships).length === 0) {
            displayFriends = null;
        } else { 
            displayFriends = this.props.friendships.map(friend => {
                return (
                    <div className='friend-tile' key={friend.id}><Link to={`/users/${friend.id}`}>
                        <div className=''><img className='friend-tile-photo' src={friend.profilePhoto}/></div>
                        <div className='friend-tile-name'><font>{friend.fname} {friend.lname}</font></div>
                    </Link></div>
                )
            })
        }

        return (
            <div className='profile-friends-container'>
                <div className='profile-friends-icon'></div>
                <h3>Friends 
                    <p className='dot'>•</p>
                    <p className='friend-count'>{this.props.friendships.length}</p>
                </h3>

                <div className='friends-display'>
                    {displayFriends}
                </div>
            </div>
        )
    }
}

export default FriendsInfo