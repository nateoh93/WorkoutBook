import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/session_actions';
import ProfileBio from './profile_bio';

const mSTP = (state, ownProps) => {
    let friendships = [];
    if (state.entities.friendships[ownProps.match.params.userId] !== undefined) {
        friendships = Object.values(state.entities.friendships[ownProps.match.params.userId])
    }
    // debugger

    return({
        user: state.entities.users[ownProps.match.params.userId],
        friendships: friendships,
        users: state.entities.users,
        // friendsIds: state.entities.users[ownProps.match.params.userId].friendIds
    })
}

const mDTP = dispatch => {
    // debugger
    return({
        fetchUser: (userId) => dispatch(fetchUser(userId)),
    })
}

export default withRouter(connect(mSTP, mDTP)(ProfileBio))