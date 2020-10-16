import React from 'react';

class FriendsInfo extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='profile-friends-container'>
                <div className='profile-friends-icon'></div>
                <h3>Friends</h3>
            </div>
        )
    }
}

export default FriendsInfo