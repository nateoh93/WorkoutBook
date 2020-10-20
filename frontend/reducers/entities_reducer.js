import { combineReducers } from 'redux';
import friendshipReducer from './friendships_reducer';
import postsReducer from './posts_reducer';
import usersReducer from './users_reducer';
import commentsReducer from './comments_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    friendships: friendshipReducer,
    posts: postsReducer,
    comments: commentsReducer
});

export default entitiesReducer;