import * as FriendAPIUtil from '../util/friend_api_util'

export const RECEIVE_FRIEND_REQUEST = 'RECEIVE_FRIEND_REQUEST';
export const ACCEPT_FRIENDSHIP = 'ACCEPT_FRIENDSHIP';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';

const receiveFriendRequest = data => {
    return ({
        type: RECEIVE_FRIEND_REQUEST,
        data
    })
}

const acceptFriendship = data => {
    return ({
        type: ACCEPT_FRIENDSHIP,
        data
    })
}

const removeFriendship = data => {
    return ({
        type: REMOVE_FRIENDSHIP,
        data
    })
}

export const createFriendRequest = data => dispatch => {
    return (FriendAPIUtil.createFriendRequest(data))
        .then( (newRequest) => dispatch(receiveFriendRequest(newRequest)))
}

export const createFriend = data => dispatch => {
    return (FriendAPIUtil.createFriend(data))
        .then( (newFriend) => dispatch(acceptFriendship(newFriend)))
}

export const deleteFriend = data => dispatch => {
    return (FriendAPIUtil.deleteFriend(data))
        .then( () => dispatch(removeFriendship(data)))
}