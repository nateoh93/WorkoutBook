import { combineReducers } from 'redux';
import friendshipReducer from './friendships_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    friendships: friendshipReducer
});

export default entitiesReducer;