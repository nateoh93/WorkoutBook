import { ACCEPT_FRIENDSHIP, RECEIVE_FRIEND_REQUEST, REMOVE_FRIEND_REQUEST } from "../actions/friend_actions";
import { RECEIVE_ALL_USERS } from "../actions/session_actions";

const friendRequestsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_FRIEND_REQUEST:
            nextState[Object.keys(action.request)] = action.request
            return nextState;
        case REMOVE_FRIEND_REQUEST:
            delete nextState[action.request.id]
            return nextState;
        case ACCEPT_FRIENDSHIP:
            delete nextState[Object.keys(action.friendship.request)]
            return nextState;
        case RECEIVE_ALL_USERS:
            return Object.assign(nextState, action.usersPayload.friendRequests);
        default:
            return state;
    }
}

export default friendRequestsReducer