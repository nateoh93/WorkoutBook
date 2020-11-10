import { ACCEPT_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../actions/friend_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/session_actions'

const friendshipReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_USERS:

            return Object.assign(nextState, action.usersPayload.friendships)
        case RECEIVE_USER:
            return Object.assign(nextState, action.user.friendships)

            // nextState[action.user.user.id] = action.user.friends
            // return nextState;
        case ACCEPT_FRIENDSHIP:
            nextState[Object.keys(action.friendship.friend)] = Object.values(action.friendship.friend)[0]
            nextState[Object.keys(action.friendship.inverse_friend)] = Object.values(action.friendship.inverse_friend)[0]
            return nextState;
        case REMOVE_FRIENDSHIP:
            delete nextState[Object.keys(action.friendship.friend)]
            delete nextState[Object.keys(action.friendship.inverse_friend)]
            // delete nextState[action.friendship.id];
            return nextState;
        default:
            return state;
    }
}

export default friendshipReducer