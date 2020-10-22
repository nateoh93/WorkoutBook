export const createFriend = friend => {
    return $.ajax({
        url: `/api/friendships`,
        method: `POST`,
        data: {friend}
    })
}

export const deleteFriend = friend => {
    return $.ajax({
        url: `/api/friendships/${friend.id}`,
        method: `DELETE`,
        data: {friend}
    })
}

export const createFriendRequest = request => {
    return $.ajax({
        url: `/api/friend_requests`,
        method: `POST`,
        data: {request}
    })
}