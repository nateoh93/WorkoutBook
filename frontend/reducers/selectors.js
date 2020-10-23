export const getUserFriends = ({entities}, id) => {
    // debugger
    let userFriends = [];

    Object.values(entities.friendships).forEach( user => {
        if (user.user_id == parseInt(id)) {
            userFriends.push(entities.users[user.friend_id]);
        };
    });

    return userFriends
}

export const getUserFriendships = ({entities}, id) => {
    // debugger
    let userFriendships = [];

    Object.values(entities.friendships).forEach( user => {
        if (user.user_id == parseInt(id)) {
            userFriendships.push(user);
        };
    });

    return userFriendships
}

export const getLikes = (state, item ) => {
    let likes = [];
    const type = item.post_author_id ? 'Post' : 'Comment';

    Object.values(state.entities.likes).forEach( like => {
        if ( like.likeable_id === item.id && like.likeable_type === type) {
            likes.push(like)
        }
    })

    return likes
}

export const receivedRequests = ({users, friendRequests}, id) => {
    // debugger
    let requestedUsers = [];
    // if (Object.keys(state.entities.friendRequests).length === 0 || state.entities.friendRequests === undefined) {
    // if (friendRequests[id] === undefined || Object.keys(friendRequests).length === 0) {
    //     return requestedUsers;
    // } else {
    //     Object.values(friendRequests[id]).forEach ( request => {
    //         requestedUsers.push(users[request.requester_id]);
    //     });
    
    //     return requestedUsers
    // }

    Object.values(friendRequests).forEach( request => {
        if (request.requestee_id === id) {
            requestedUsers.push(users[request.requester_id]);
        };
    });

    return requestedUsers;
}


export const requestedFriends = ({friendRequests}, id) => {
    // debugger

    let requestedFriends = [];

    Object.values(friendRequests).forEach(request => {
        if (request.requestee_id === id) {
            requestedFriends.push(request);
        };
    });

    return requestedFriends
}