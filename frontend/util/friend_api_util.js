export const createFriend = friendship => {
    return $.ajax({
        url: `/api/friendships`,
        method: `POST`,
        data: friendship
    })
}

export const deleteFriend = friendship => {
    return $.ajax({
        url: `/api/friendships/${friendship.id}`,
        method: `DELETE`,
        data: {friendship}
    })
}

export const createFriendRequest = friend_request => {
    return $.ajax({
        url: `/api/friend_requests`,
        method: `POST`,
        data: {friend_request}
    })
}

export const deleteFriendRequest = request => {
    return $.ajax({
        url: `/api/friend_requests/${request.id}`,
        method: `DELETE`,
        data: {request}
    })
}