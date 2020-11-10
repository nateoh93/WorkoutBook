import {connect} from 'react-redux';
import { createFriend, deleteFriend, deleteFriendRequest } from '../../actions/friend_actions';
import { receivedRequests, requestedFriends } from '../../reducers/selectors';
import FriendRequest from './friend_request';

const mSTP = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        requestedUsers: receivedRequests(state.entities, state.session.id),
        users: state.entities.users,
        requestedFriends: requestedFriends(state.entities, state.session.id)
    })
}

const mDTP = (dispatch) => {
    return ({
        createFriend: (friend) => dispatch(createFriend(friend)),
        deleteFriendRequest: (friend) => dispatch(deleteFriendRequest(friend))
    })
};

export default connect(mSTP, mDTP)(FriendRequest)