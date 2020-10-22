import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_ALL_POSTS, RECEIVE_POST } from "../actions/post_actions";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_COMMENT:
            // debugger
            nextState[action.comment.id] = action.comment
            return nextState;
        case REMOVE_COMMENT:
            // debugger
            delete nextState[action.commentId]
            return nextState;
        case RECEIVE_ALL_POSTS:
            return Object.assign(nextState, action.posts.comments)
        case RECEIVE_LIKE:
            // debugger
            if (action.like.likeable_type === 'Comment') {
                nextState[action.like.likeable_id].likeIds.push(action.like.id)
            }
            return nextState;
        case REMOVE_LIKE:
            // debugger
            if (action.like.likeable_type === 'Comment') {
                let newLikeIds = nextState[action.like.likeable_id].likeIds.filter(id => id !== action.like.id);
                nextState[action.like.likeable_id].likeIds = newLikeIds;
            }
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;