import React from 'react';

class FriendsInfo extends React.Component{
    constructor(props) {
        super(props)
        // this.displayFriends = this.displayFriends.bind(this);
    }

    // displayFriends() {
    //     friendsIds.map( friendId => {
    //         return (
    //             <div>{this.props.users[friendId].fname}</div>
    //         )
    //     })
    // }
    

    render() {
        return (
            <div className='profile-friends-container'>
                <div className='profile-friends-icon'></div>
                <h3>Friends</h3>
                {/* {this.displayFriends()} */}
            </div>
        )
    }
}

export default FriendsInfo