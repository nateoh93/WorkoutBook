export const createFriend = friendship => {
    debugger
    return $.ajax({
        url: `/api/friendships`,
        method: `POST`,
        data: friendship
    })
}

export const deleteFriend = friendship => {
    debugger
    return $.ajax({
        url: `/api/friendships/${friendship.id}`,
        method: `DELETE`,
        data: {friendship}
    })
}

export const createFriendRequest = request => {
    debugger
    return $.ajax({
        url: `/api/friend_requests`,
        method: `POST`,
        data: {request}
    })
}

export const deleteFriendRequest = request => {
    debugger
    return $.ajax({
        url: `/api/friend_requests/${request.id}`,
        method: `DELETE`,
        data: {request}
    })
}