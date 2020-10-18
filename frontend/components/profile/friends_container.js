import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/session_actions';
import FriendsInfo from './friends_info';

const mSTP = (state, ownProps) => {
    let profileUser = state.entities.users[ownProps.match.params.userId];
    const friendIds = profileUser.friendIds
    
    debugger
    return ({
        profileId: state.entities.users[ownProps.match.params.userId],
        users: state.entities.users,
        friendsIds: friendIds
    })
}

const mDTP = dispatch => {
    return ({
        fetchUser: (userId) => dispatch(fetchUser(userId))
    })
}

export default withRouter(connect(mSTP, mDTP)(FriendsInfo))