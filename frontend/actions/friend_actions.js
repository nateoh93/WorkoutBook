import * as FriendAPIUtil from '../util/friend_api_util'

export const RECEIVE_FRIEND_REQUEST = 'RECEIVE_FRIEND_REQUEST';
export const REMOVE_FRIEND_REQUEST = 'REMOVE_FRIEND_REQUEST';
export const ACCEPT_FRIENDSHIP = 'ACCEPT_FRIENDSHIP';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';

const receiveFriendRequest = request => {
    return ({
        type: RECEIVE_FRIEND_REQUEST,
        request
    })
}

const removeFriendRequest = request => {
    return ({
        type: REMOVE_FRIEND_REQUEST,
        request
    })
}

const acceptFriendship = friendship => {
    return ({
        type: ACCEPT_FRIENDSHIP,
        friendship
    })
}

const removeFriendship = friendship => {
    return ({
        type: REMOVE_FRIENDSHIP,
        friendship
    })
}

export const createFriendRequest = data => dispatch => {
    return (FriendAPIUtil.createFriendRequest(data))
        .then( (newRequest) => dispatch(receiveFriendRequest(newRequest)))
}

export const deleteFriendRequest = data => dispatch => {
    return (FriendAPIUtil.deleteFriendRequest(data))
        .then( () => dispatch(removeFriendRequest(data)))
}

export const createFriend = data => dispatch => {
    return (FriendAPIUtil.createFriend(data))
        .then( (newFriend) => dispatch(acceptFriendship(newFriend)))
}

export const deleteFriend = data => dispatch => {
    return (FriendAPIUtil.deleteFriend(data))
        .then( (deletedFriendship) => dispatch(removeFriendship(deletedFriendship)))
}