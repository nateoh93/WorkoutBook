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

export const receivedRequests = (state, id) => {
    debugger
    let requestedUsers = [];
    if (Object.keys(state.entities.friendRequests).length === 0) {
        return requestedUsers;
    } else {
        Object.values(state.entities.friendRequests[id]).forEach ( request => {
            requestedUsers.push(state.entities.users[request.requester_id]);
        });
    
        return requestedUsers
    }
}