import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_ALL_POSTS, RECEIVE_POST } from "../actions/post_actions";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_COMMENT:
            debugger
            nextState[action.comment.id] = action.comment
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.commentId]
            return nextState;
        case RECEIVE_ALL_POSTS:
            return Object.assign(nextState, action.posts.comments)
        default:
            return state;
    }
}

export default commentsReducer;