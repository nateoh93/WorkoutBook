import React from 'react';

class FriendRequest extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.requestedUsers.length}</div>
        );
    }
}

export default FriendRequest;