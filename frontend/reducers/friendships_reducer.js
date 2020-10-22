import { ACCEPT_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../actions/friend_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/session_actions'

const friendshipReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return Object.assign(nextState, action.usersPayload.friendships)
        case RECEIVE_USER:
            nextState[action.user.user.id] = action.user.friends
            return nextState;
        case ACCEPT_FRIENDSHIP:
            nextState[action.friendship.friend.id] = action.friendship.friend
            nextState[action.friendship.inverse_friend.id] = action.friendship.inverse_friend
            return nextState;
        case REMOVE_FRIENDSHIP:
            delete nextState[action.friendship.id];
            return nextState;
        default:
            return state;
    }
}

export default friendshipReducer