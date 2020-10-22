import {connect} from 'react-redux';
import { createFriend, deleteFriend } from '../../actions/friend_actions';
import { receivedRequests } from '../../reducers/selectors';
import FriendRequest from './friend_request';

const mSTP = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        requestedUsers: receivedRequests(state, state.session.id),

    })
}

const mDTP = (dispatch) => {
    return ({
        createFriend: (friend) => dispatch(createFriend(friend)),
        deleteFriend: (friend) => dispatch(deleteFriend(friend))
    })
};

export default connect(mSTP, mDTP)(FriendRequest)