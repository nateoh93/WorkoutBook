import { ACCEPT_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../actions/friend_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/session_actions'

const friendshipReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            debugger

            return Object.assign(nextState, action.usersPayload.friendships)
        case RECEIVE_USER:
            debugger
            return Object.assign(nextState, action.user.friendships)

            // nextState[action.user.user.id] = action.user.friends
            // return nextState;
        case ACCEPT_FRIENDSHIP:
            debugger
            nextState[Object.keys(action.friendship.friend)] = action.friendship.friend
            nextState[Object.keys(action.friendship.inverse_friend)] = action.friendship.inverse_friend
            return nextState;
        case REMOVE_FRIENDSHIP:
            debugger
            delete nextState[action.friendship.id];
            return nextState;
        default:
            return state;
    }
}

export default friendshipReducer