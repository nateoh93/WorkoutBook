import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_ALL_POSTS } from "../actions/post_actions";


const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_LIKE:
            // debugger
            nextState[action.like.id] = action.like
            return nextState;
        case REMOVE_LIKE:
            // debugger
            delete nextState[action.like.id]
            return nextState;
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, action.likes)
        default:
            return state;
    }
}

export default likesReducer;