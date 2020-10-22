import { combineReducers } from 'redux';
import friendshipReducer from './friendships_reducer';
import postsReducer from './posts_reducer';
import usersReducer from './users_reducer';
import commentsReducer from './comments_reducer'
import likesReducer from './likes_reducer';
import friendRequestsReducer from './friend_requests_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    friendships: friendshipReducer,
    posts: postsReducer,
    comments: commentsReducer,
    likes: likesReducer,
    friendRequests: friendRequestsReducer
});

export default entitiesReducer;