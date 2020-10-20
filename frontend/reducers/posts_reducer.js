import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";


const postsReducer = (state={}, action) => {
    // let posts;
    // if (action.posts.posts !== undefined) {
    //     posts = action.posts.posts
    // // } else {
    // }

    // debugger
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            // nextState = action.posts.posts
            return Object.assign({}, action.posts.posts);
        case RECEIVE_POST:
            nextState[action.post.post.id] = action.post.post
            return nextState;
        case REMOVE_POST:
            delete nextState[action.postId]
            return nextState;
        case RECEIVE_COMMENT:
            // debugger
            let post = nextState[action.comment.post_id];
            if (!post.commentIds.includes(action.comment.id)) {
                post.commentIds.push(action.comment.id)
            }
            return nextState;
        case REMOVE_COMMENT:
            debugger
            let newCommentIds = nextState[action.comment.post_id].commentIds.filter(id => {
                id !== action.comment.id
            })
            nextState[action.comment.post_id].commentIds = newCommentIds;
            return nextState;
        default:
            return state;
    }
}

export default postsReducer;