import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/session_actions'

const friendshipReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return Object.assign({}, action.usersPayload.friendships)
        // case RECEIVE_USER:
        //     nextState[action.user.id] = action.user.friendIds
        //     return nextState
        default:
            return state;
    }
}

export default friendshipReducer